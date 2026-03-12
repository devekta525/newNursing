import { validationResult } from 'express-validator';
import { sendSuccess, sendError } from '../utils/response.js';
import User from '../models/User.model.js';
import { canManageRole, getManageableRoles } from '../config/roles.js';
import * as authService from '../services/auth.service.js';

/**
 * Admin Controller
 * Handles HTTP requests for admin endpoints
 */

/**
 * Create a new sub-admin
 * POST /api/admin/create-subadmin
 */
export const createSubAdmin = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation failed', errors.array());
    }

    const { name, email, phone, password } = req.body;

    // Enforce business rule: only up to 5 subadmins can exist
    const subAdminCount = await User.countDocuments({ role: 'SUB_ADMIN' });
    if (subAdminCount >= 5) {
      return sendError(res, 403, 'Maximum number of sub-admins reached. Only 5 sub-admins are allowed in the system.');
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return sendError(res, 400, 'User with this email already exists');
    }

    // Create sub-admin
    const subAdmin = await User.create({
      name,
      email: email.toLowerCase(),
      phone,
      password,
      role: 'SUB_ADMIN',
    });

    return sendSuccess(
      res,
      201,
      'Sub-admin created successfully',
      { user: subAdmin }
    );
  } catch (error) {
    next(error);
  }
};

/**
 * Get all sub-admins
 * GET /api/admin/subadmins
 */
export const getSubAdmins = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build query - only fetch sub-admins
    const query = { role: 'SUB_ADMIN' };

    const subAdmins = await User.find(query)
      .select('-password')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await User.countDocuments(query);

    return sendSuccess(res, 200, 'Sub-admins retrieved successfully', {
      subAdmins,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a sub-admin (soft delete - set isActive to false)
 * DELETE /api/admin/subadmin/:id
 */
export const deleteSubAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;

    const targetUser = await User.findById(id);

    if (!targetUser) {
      return sendError(res, 404, 'User not found');
    }

    // Check if current user can manage target user
    if (!canManageRole(req.userRole, targetUser.role)) {
      return sendError(res, 403, 'You do not have permission to manage this user');
    }

    // Prevent self-deletion
    if (targetUser._id.toString() === req.userId) {
      return sendError(res, 400, 'You cannot delete your own account');
    }

    // Soft delete - set isActive to false
    targetUser.isActive = false;
    await targetUser.save();



    return sendSuccess(res, 200, 'Sub-admin deactivated successfully');
  } catch (error) {
    next(error);
  }
};

/**
 * Update sub-admin password
 * PUT /api/admin/subadmin/:id/password
 */
export const updateSubAdminPassword = async (req, res, next) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation failed', errors.array());
    }

    const { id } = req.params;
    const { newPassword } = req.body;

    const targetUser = await User.findById(id).select('+password');

    if (!targetUser) {
      return sendError(res, 404, 'User not found');
    }

    // Check if current user can manage target user
    if (!canManageRole(req.userRole, targetUser.role)) {
      return sendError(res, 403, 'You do not have permission to manage this user');
    }

    // Update password
    targetUser.password = newPassword;
    await targetUser.save();



    return sendSuccess(res, 200, 'Password updated successfully');
  } catch (error) {
    next(error);
  }
};

/**
 * Update sub-admin status (activate/deactivate)
 * PUT /api/admin/subadmin/:id/status
 */
export const updateSubAdminStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    if (typeof isActive !== 'boolean') {
      return sendError(res, 400, 'isActive must be a boolean value');
    }

    const targetUser = await User.findById(id);

    if (!targetUser) {
      return sendError(res, 404, 'User not found');
    }

    // Check if current user can manage target user
    if (!canManageRole(req.userRole, targetUser.role)) {
      return sendError(res, 403, 'You do not have permission to manage this user');
    }

    // Prevent self-deactivation
    if (targetUser._id.toString() === req.userId && !isActive) {
      return sendError(res, 400, 'You cannot deactivate your own account');
    }

    // Update status
    targetUser.isActive = isActive;
    await targetUser.save();



    return sendSuccess(res, 200, `User ${isActive ? 'activated' : 'deactivated'} successfully`, {
      user: targetUser,
    });
  } catch (error) {
    next(error);
  }
};
