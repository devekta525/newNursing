import { body } from 'express-validator';

export const createBlogValidation = [
  body('title').trim().notEmpty().withMessage('Blog title is required'),
  body('slug').trim().notEmpty().withMessage('Slug is required'),
  body('content').trim().notEmpty().withMessage('Blog content is required'),
  body('metaTitle').optional().trim(),
  body('metaDescription').optional().trim(),
  body('featuredImage').optional().trim(),
  body('schemaToggle').optional().isBoolean().withMessage('Schema toggle must be a boolean')
];

export const updateBlogValidation = [
  ...createBlogValidation.map(validation => validation.optional())
];

export const updateBlogStatusValidation = [
  body('status').isIn(['DRAFT', 'PUBLISHED']).withMessage('Status must be DRAFT or PUBLISHED')
];
