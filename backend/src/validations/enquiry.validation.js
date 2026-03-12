import { body, param } from 'express-validator';

export const validateCreateEnquiry = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isString()
    .withMessage('Name must be a string')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  
  body('state')
    .trim()
    .notEmpty()
    .withMessage('State is required')
    .isString()
    .withMessage('State must be a string'),
  
  body('city')
    .trim()
    .notEmpty()
    .withMessage('City is required')
    .isString()
    .withMessage('City must be a string'),
  
  body('serviceRequired')
    .trim()
    .notEmpty()
    .withMessage('Service required is required')
    .isString()
    .withMessage('Service required must be a string'),
  
  body('whenRequired')
    .trim()
    .notEmpty()
    .withMessage('When required is required')
    .isString()
    .withMessage('When required must be a string'),
  
  body('patientCondition')
    .optional()
    .trim()
    .isString()
    .withMessage('Patient condition must be a string'),
];

export const validateUpdateEnquiryStatus = [
  param('id').isMongoId().withMessage('Invalid enquiry ID format'),
  body('status')
    .trim()
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['PENDING', 'CONTACTED', 'RESOLVED'])
    .withMessage('Validation Error: Status must be one of: PENDING, CONTACTED, RESOLVED'),
];

export const validateEnquiryId = [
  param('id').isMongoId().withMessage('Invalid enquiry ID format'),
];
