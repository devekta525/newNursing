import express from 'express';
import { body } from 'express-validator';
import * as authController from '../controllers/auth.controller.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for login endpoint (security)
const loginRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 requests per window
  message: 'Too many login attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

import { registerValidation, loginValidation } from '../validations/auth.validation.js';

// Routes
router.post('/register', registerValidation, authController.register);
router.post('/login', loginRateLimit, loginValidation, authController.login);
router.post('/logout', authController.logout);


export default router;
