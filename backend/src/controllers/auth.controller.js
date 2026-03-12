import { validationResult } from 'express-validator';
import { sendSuccess, sendError } from '../utils/response.js';
import * as authService from '../services/auth.service.js';

/**
 * Authentication Controller
 * Handles HTTP requests for authentication endpoints
 */

/**
 * Register a new user
 * POST /api/auth/register
 */
export const register = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation failed', errors.array());
    }

    // Force role to USER for public registration
    req.body.role = 'USER';
    const user = await authService.registerUser(req.body);

    return sendSuccess(
      res,
      201,
      'User registered successfully',
      { user }
    );
  } catch (error) {
    next(error);
  }
};

/**
 * Login user
 * POST /api/auth/login
 */
export const login = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation failed', errors.array());
    }

    const { email, password } = req.body;

    const { user, accessToken } = await authService.loginUser(
      email,
      password
    );

    return sendSuccess(res, 200, 'Login successful', {
      user,
      accessToken,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Logout user
 * POST /api/auth/logout
 */
export const logout = async (req, res, next) => {
  try {
    const refreshToken = req.body.refreshToken || req.cookies?.refreshToken;

    if (refreshToken) {
      await authService.logoutUser(refreshToken);
    }

    // Clear cookie
    res.clearCookie('refreshToken');

    return sendSuccess(res, 200, 'Logout successful');
  } catch (error) {
    next(error);
  }
};


