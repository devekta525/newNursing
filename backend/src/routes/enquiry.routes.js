import express from 'express';
import * as enquiryController from '../controllers/enquiry.controller.js';
import * as validation from '../validations/enquiry.validation.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { requireRole } from '../middlewares/role.middleware.js';
import { ROLES } from '../config/roles.js';

const router = express.Router();

// Public routes
router.post(
  '/',
  validation.validateCreateEnquiry,
  enquiryController.createEnquiry
);

// Protected routes - Only ADMIN and SUB_ADMIN
router.use(authenticate);
router.use(requireRole(ROLES.ADMIN, ROLES.SUB_ADMIN));

router.get('/', enquiryController.getEnquiries);

router.get(
  '/:id',
  validation.validateEnquiryId,
  enquiryController.getEnquiryById
);

router.patch(
  '/:id/status',
  validation.validateUpdateEnquiryStatus,
  enquiryController.updateEnquiryStatus
);

router.delete(
  '/:id',
  validation.validateEnquiryId,
  enquiryController.deleteEnquiry
);

export default router;
