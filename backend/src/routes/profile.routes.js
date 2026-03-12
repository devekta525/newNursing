import express from 'express';
import { body } from 'express-validator';
import * as profileController from '../controllers/profile.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = express.Router();

// All profile routes require authentication
router.use(authenticate);

import { updateProfileValidation, changePasswordValidation } from '../validations/profile.validation.js';

// Routes
router.get('/', profileController.getProfile);
router.put('/update', updateProfileValidation, profileController.updateProfile);
router.put('/change-password', changePasswordValidation, profileController.changePassword);

export default router;
