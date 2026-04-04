import { body } from 'express-validator';

export const updateProfileValidation = [
  body('name')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Name cannot be empty')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('phone')
    .optional()
    .trim()
    .matches(/^\d{10}$/)
    .withMessage('Phone number must be exactly 10 digits'),
  body('qualification')
    .custom((value) => {
      if (value === undefined || value === null || value === '') {
        return true;
      }

      if (typeof value !== 'string') {
        throw new Error('Qualification must be text');
      }

      if (value.trim().length > 200) {
        throw new Error('Qualification cannot exceed 200 characters');
      }

      return true;
    }),
  body('workExperience')
    .custom((value) => {
      if (value === undefined || value === null || value === '') {
        return true;
      }

      if (typeof value !== 'string') {
        throw new Error('Work experience must be text');
      }

      if (value.trim().length > 1000) {
        throw new Error('Work experience cannot exceed 1000 characters');
      }

      return true;
    }),
  body('currentlyWorking')
    .optional()
    .isBoolean()
    .withMessage('Currently working must be a boolean value'),
  body('currentCompany')
    .custom((value, { req }) => {
      const currentlyWorking = req.body.currentlyWorking === true || req.body.currentlyWorking === 'true';

      if (value === undefined || value === null || value === '') {
        if (currentlyWorking) {
          throw new Error('Current company name is required when you are currently working');
        }

        return true;
      }

      if (typeof value !== 'string') {
        throw new Error('Current company must be text');
      }

      if (value.trim().length > 200) {
        throw new Error('Current company cannot exceed 200 characters');
      }

      if (currentlyWorking && !String(value || '').trim()) {
        throw new Error('Current company name is required when you are currently working');
      }

      return true;
    }),
  body('currentRole')
    .custom((value, { req }) => {
      const currentlyWorking = req.body.currentlyWorking === true || req.body.currentlyWorking === 'true';

      if (value === undefined || value === null || value === '') {
        if (currentlyWorking) {
          throw new Error('Current role is required when you are currently working');
        }

        return true;
      }

      if (typeof value !== 'string') {
        throw new Error('Current role must be text');
      }

      if (value.trim().length > 200) {
        throw new Error('Current role cannot exceed 200 characters');
      }

      if (currentlyWorking && !String(value || '').trim()) {
        throw new Error('Current role is required when you are currently working');
      }

      return true;
    }),
];

export const changePasswordValidation = [
  body('currentPassword')
    .notEmpty()
    .withMessage('Current password is required'),
  body('newPassword')
    .notEmpty()
    .withMessage('New password is required')
    .isLength({ min: 6 })
    .withMessage('New password must be at least 6 characters'),
];
