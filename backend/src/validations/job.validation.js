import { body, param } from 'express-validator';

export const createJobValidation = [
  body('title').trim().notEmpty().withMessage('Job title is required'),
  body('description').trim().notEmpty().withMessage('Job description is required'),
  body('requirements').trim().notEmpty().withMessage('Requirements are required'),
  body('location').trim().notEmpty().withMessage('Location is required'),
  body('salary').optional().trim(),
];

export const updateJobStatusValidation = [
  body('status').isIn(['OPEN', 'CLOSED']).withMessage('Status must be OPEN or CLOSED')
];

export const updateJobValidation = [
  ...createJobValidation.map(validation => validation.optional()) // Using the same rules but optional
];
