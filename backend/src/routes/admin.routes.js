import express from 'express';
import { body } from 'express-validator';
import * as adminController from '../controllers/admin.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { requireAdmin, requireAdminOrSubAdmin } from '../middlewares/role.middleware.js';

const router = express.Router();

// All admin routes require authentication
router.use(authenticate);

// Validation rules
const createSubAdminValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('phone')
    .optional()
    .trim()
    .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/)
    .withMessage('Please provide a valid phone number'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];

const updatePasswordValidation = [
  body('newPassword')
    .notEmpty()
    .withMessage('New password is required')
    .isLength({ min: 6 })
    .withMessage('New password must be at least 6 characters'),
];

const updateStatusValidation = [
  body('isActive')
    .notEmpty()
    .withMessage('isActive is required')
    .isBoolean()
    .withMessage('isActive must be a boolean value'),
];

// Routes
router.post('/create-subadmin', requireAdmin, createSubAdminValidation, adminController.createSubAdmin);
router.get('/users/report', requireAdminOrSubAdmin, adminController.downloadUsersReport);
router.get('/users', requireAdminOrSubAdmin, adminController.getUsers);
router.get('/subadmins', requireAdmin, adminController.getSubAdmins);
router.delete('/subadmin/:id', requireAdmin, adminController.deleteSubAdmin);
router.put('/subadmin/:id/password', requireAdminOrSubAdmin, updatePasswordValidation, adminController.updateSubAdminPassword);
router.put('/subadmin/:id/status', requireAdminOrSubAdmin, updateStatusValidation, adminController.updateSubAdminStatus);

export default router;
