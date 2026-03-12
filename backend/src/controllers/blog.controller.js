import Blog from '../models/Blog.model.js';
import { sendSuccess, sendError } from '../utils/response.js';
import { validationResult } from 'express-validator';

// -----------------------------------------
// PUBLIC / GENERAL APIs
// -----------------------------------------

/**
 * Get all blogs (Public / Admin)
 * Can be filtered and paginated
 */
export const getBlogs = async (req, res) => {
  try {
    const { status, limit = 10, page = 1 } = req.query;
    
    const query = {};
    if (status) query.status = status;

    const skip = (page - 1) * limit;
    
    const blogs = await Blog.find(query)
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
      
    const total = await Blog.countDocuments(query);
    
    return sendSuccess(res, 200, 'Blogs retrieved successfully', {
      blogs,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    return sendError(res, 500, 'Error retrieving blogs', error.message);
  }
};

/**
 * Get single blog by slug (Public)
 * Important for SEO/Frontend dynamic routing
 */
export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ slug }).populate('createdBy', 'name email');
    
    if (!blog) {
      return sendError(res, 404, 'Blog not found');
    }
    
    return sendSuccess(res, 200, 'Blog retrieved successfully', blog);
  } catch (error) {
    return sendError(res, 500, 'Error retrieving blog', error.message);
  }
};

/**
 * Get single blog by ID
 */
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).populate('createdBy', 'name email');
    
    if (!blog) {
      return sendError(res, 404, 'Blog not found');
    }
    
    return sendSuccess(res, 200, 'Blog retrieved successfully', blog);
  } catch (error) {
    return sendError(res, 500, 'Error retrieving blog', error.message);
  }
};


// -----------------------------------------
// ADMIN / SUB-ADMIN APIs
// -----------------------------------------

/**
 * Create a new blog
 * Allowed: Admin & Sub-Admin
 */
export const createBlog = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation Error', errors.array());
    }

    const { title, slug, content, metaTitle, metaDescription, featuredImage, schemaToggle, status } = req.body;

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return sendError(res, 400, 'Blog with this slug already exists');
    }

    const blog = new Blog({
      title,
      slug,
      content,
      metaTitle,
      metaDescription,
      featuredImage,
      schemaToggle,
      status: status || 'DRAFT',
      createdBy: req.user
    });

    await blog.save();
    return sendSuccess(res, 201, 'Blog created successfully', blog);
  } catch (error) {
    if (error.code === 11000) { // MongoDB duplicate key error
      return sendError(res, 400, 'Slug must be unique');
    }
    return sendError(res, 500, 'Error creating blog', error.message);
  }
};

/**
 * Update an existing blog
 * Allowed: Admin & Sub-Admin
 */
export const updateBlog = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation Error', errors.array());
    }

    const { id } = req.params;
    
    // For updating slug, verify uniqueness to avoid collisions
    if (req.body.slug) {
      const existingBlog = await Blog.findOne({ slug: req.body.slug, _id: { $ne: id } });
      if (existingBlog) {
        return sendError(res, 400, 'Blog with this slug already exists');
      }
    }

    const blog = await Blog.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!blog) {
      return sendError(res, 404, 'Blog not found');
    }

    return sendSuccess(res, 200, 'Blog updated successfully', blog);
  } catch (error) {
    return sendError(res, 500, 'Error updating blog', error.message);
  }
};

/**
 * Delete a blog entirely
 * Allowed: ONLY Admin
 */
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    
    if (!blog) {
      return sendError(res, 404, 'Blog not found');
    }
    
    return sendSuccess(res, 200, 'Blog deleted successfully', null);
  } catch (error) {
    return sendError(res, 500, 'Error deleting blog', error.message);
  }
};
