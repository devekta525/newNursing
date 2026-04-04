import { validationResult } from 'express-validator';
import { sendSuccess, sendError } from '../utils/response.js';
import User from '../models/User.model.js';
import bcrypt from 'bcrypt';

/**
 * Profile Controller
 * Handles HTTP requests for user profile endpoints
 */

/**
 * Get current user profile
 * GET /api/profile/me
 */
export const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return sendError(res, 404, 'User not found');
    }

    return sendSuccess(res, 200, 'Profile retrieved successfully', { user });
  } catch (error) {
    next(error);
  }
};

/**
 * Update user profile
 * PUT /api/profile/update
 */
export const updateProfile = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation failed', errors.array());
    }

    const {
      name,
      phone,
      qualification,
      workExperience,
      currentlyWorking,
      currentCompany,
      currentRole,
    } = req.body;
    const updateData = {};
    const hasOwnProperty = (key) => Object.prototype.hasOwnProperty.call(req.body, key);
    const normalizeOptionalText = (value) => {
      if (typeof value !== 'string') {
        return null;
      }

      const trimmedValue = value.trim();
      return trimmedValue ? trimmedValue : null;
    };
    const hasCurrentlyWorking = hasOwnProperty('currentlyWorking');
    const normalizedCurrentlyWorking = hasCurrentlyWorking
      ? currentlyWorking === true || currentlyWorking === 'true'
      : undefined;

    if (hasOwnProperty('name')) {
      updateData.name = name;
    }

    if (hasOwnProperty('phone')) {
      updateData.phone = normalizeOptionalText(phone);
    }

    if (hasOwnProperty('qualification')) {
      updateData.qualification = normalizeOptionalText(qualification);
    }

    if (hasOwnProperty('workExperience')) {
      updateData.workExperience = normalizeOptionalText(workExperience);
    }

    if (hasCurrentlyWorking) {
      updateData.currentlyWorking = normalizedCurrentlyWorking;

      if (!normalizedCurrentlyWorking) {
        updateData.currentCompany = null;
        updateData.currentRole = null;
      }
    }

    if (hasOwnProperty('currentCompany') && normalizedCurrentlyWorking !== false) {
      updateData.currentCompany = normalizeOptionalText(currentCompany);
    }

    if (hasOwnProperty('currentRole') && normalizedCurrentlyWorking !== false) {
      updateData.currentRole = normalizeOptionalText(currentRole);
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!user) {
      return sendError(res, 404, 'User not found');
    }

    return sendSuccess(res, 200, 'Profile updated successfully', { user });
  } catch (error) {
    next(error);
  }
};

/**
 * Change user password
 * PUT /api/profile/change-password
 */
export const changePassword = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation failed', errors.array());
    }

    const { currentPassword, newPassword } = req.body;

    // Get user with password field
    const user = await User.findById(req.userId).select('+password');

    if (!user) {
      return sendError(res, 404, 'User not found');
    }

    // Verify current password
    const isPasswordValid = await user.comparePassword(currentPassword);
    if (!isPasswordValid) {
      return sendError(res, 400, 'Current password is incorrect');
    }

    // Update password
    user.password = newPassword;
    await user.save();

    return sendSuccess(res, 200, 'Password changed successfully');
  } catch (error) {
    next(error);
  }
};
