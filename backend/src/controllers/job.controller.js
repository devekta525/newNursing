import { validationResult } from 'express-validator';
import Job from '../models/Job.model.js';
import { sendSuccess, sendError } from '../utils/response.js';

/**
 * Create a new Job
 * POST /api/jobs
 * Protected: Admin, SubAdmin
 */
export const createJob = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation failed', errors.array());
    }

    const { title, description, requirements, location, salary, status } = req.body;

    const job = await Job.create({
      title,
      description,
      requirements,
      location,
      salary,
      status: status || 'OPEN',
      createdBy: req.userId 
    });

    return sendSuccess(res, 201, 'Job created successfully', { job });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all open jobs for public viewing
 * GET /api/jobs
 * Public
 */
export const getPublicJobs = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const query = { status: 'OPEN' };

    const jobs = await Job.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('createdBy', 'name'); // Optional: show who posted it

    const total = await Job.countDocuments(query);

    return sendSuccess(res, 200, 'Jobs retrieved successfully', {
      jobs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all jobs (including closed) for admin
 * GET /api/jobs/admin
 * Protected: Admin, SubAdmin
 */
export const getAdminJobs = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Optional query to filter by status
    const query = req.query.status ? { status: req.query.status.toUpperCase() } : {};

    const jobs = await Job.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('createdBy', 'name');

    const total = await Job.countDocuments(query);

    return sendSuccess(res, 200, 'Jobs retrieved successfully', {
      jobs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a single job by id
 * GET /api/jobs/:id
 * Public
 */
export const getJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id).populate('createdBy', 'name');
    
    if (!job) {
      return sendError(res, 404, 'Job not found');
    }

    return sendSuccess(res, 200, 'Job retrieved successfully', { job });
  } catch (error) {
    next(error);
  }
};

/**
 * Update an existing Job
 * PUT /api/jobs/:id
 * Protected: Admin, SubAdmin
 */
export const updateJob = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation failed', errors.array());
    }

    const { id } = req.params;
    const updateData = req.body;

    const job = await Job.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    
    if (!job) {
      return sendError(res, 404, 'Job not found');
    }

    return sendSuccess(res, 200, 'Job updated successfully', { job });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a Job
 * DELETE /api/jobs/:id
 * Protected: Admin, SubAdmin
 */
export const deleteJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const job = await Job.findByIdAndDelete(id);
    
    if (!job) {
      return sendError(res, 404, 'Job not found');
    }

    return sendSuccess(res, 200, 'Job deleted successfully');
  } catch (error) {
    next(error);
  }
};
