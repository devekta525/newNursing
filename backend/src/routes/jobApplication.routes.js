import express from 'express';
import * as jobAppController from '../controllers/jobApplication.controller.js';
import { applyJobValidation, updateApplicationStatusValidation } from '../validations/jobApplication.validation.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { requireAdminOrSubAdmin } from '../middlewares/role.middleware.js';

const router = express.Router();

// All application routes require at least authentication (must be a registered User)
router.use(authenticate);

// User endpoints
router.post('/apply', applyJobValidation, jobAppController.applyJob);
router.get('/my-applications', jobAppController.getMyApplications);

// Admin / SubAdmin endpoints
router.get('/job/:jobId', requireAdminOrSubAdmin, jobAppController.getJobApplications);
router.put('/:id/status', requireAdminOrSubAdmin, updateApplicationStatusValidation, jobAppController.updateApplicationStatus);

export default router;
