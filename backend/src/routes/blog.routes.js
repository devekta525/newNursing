import express from 'express';
import * as blogController from '../controllers/blog.controller.js';
import { authenticate as requireAuth } from '../middlewares/auth.middleware.js';
import { requireAdminOrSubAdmin, requireAdmin } from '../middlewares/role.middleware.js';
import { createBlogValidation, updateBlogValidation } from '../validations/blog.validation.js';

const router = express.Router();

// -----------------------------------------
// PUBLIC ROUTES
// -----------------------------------------
// Used typically by the frontend to display list & detail
router.get('/', blogController.getBlogs);
router.get('/:slug', blogController.getBlogBySlug);

// -----------------------------------------
// PROTECTED ROUTES (Admin Panel)
// -----------------------------------------
router.use(requireAuth);

// Require Admin OR Sub-Admin for Read, Create, Update
router.get(
  '/id/:id', 
  requireAdminOrSubAdmin, 
  blogController.getBlogById
);

router.post(
  '/', 
  requireAdminOrSubAdmin, 
  createBlogValidation, 
  blogController.createBlog
);

router.put(
  '/id/:id', 
  requireAdminOrSubAdmin, 
  updateBlogValidation, 
  blogController.updateBlog
);

// Require ONLY Admin (Sub-Admins cannot delete)
router.delete(
  '/id/:id', 
  requireAdmin, 
  blogController.deleteBlog
);

export default router;
