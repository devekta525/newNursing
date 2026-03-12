import express from 'express';
import * as jobController from '../controllers/job.controller.js';
import { createJobValidation, updateJobValidation } from '../validations/job.validation.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { requireAdminOrSubAdmin } from '../middlewares/role.middleware.js';

const router = express.Router();

// Public routes (anyone can see open jobs and specific job details)
router.get('/', jobController.getPublicJobs);
router.get('/:id', jobController.getJobById);

// Protected routes (Admin / SubAdmin only)
// Note: router.use() applies to all routes defined *below* it
router.use(authenticate);
router.use(requireAdminOrSubAdmin);

// We need a specific path since '/' is taken above, maybe /admin/all
router.get('/admin/all', jobController.getAdminJobs); 
router.post('/', createJobValidation, jobController.createJob);
router.put('/:id', updateJobValidation, jobController.updateJob);
router.delete('/:id', jobController.deleteJob);

export default router;
