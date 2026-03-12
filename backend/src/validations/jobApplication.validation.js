import { body, param } from 'express-validator';

export const applyJobValidation = [
  body('jobId').notEmpty().withMessage('Job ID is required').isMongoId().withMessage('Valid Job ID is required'),
  body('experience').optional().trim(),
  body('coverLetter').optional().trim(),
];

export const updateApplicationStatusValidation = [
  body('status').isIn(['Applied', 'Shortlisted', 'Rejected', 'Hired']).withMessage('Invalid status')
];
