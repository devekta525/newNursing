import { sendError } from '../utils/response.js';
import { ROLES } from '../config/roles.js';

/**
 * Role-based Access Control Middleware
 * Checks if user has required role(s) to access the route
 */

/**
 * Middleware to check if user has one of the required roles
 * @param {...string} roles - Required roles (can pass multiple)
 * @returns {Function} - Express middleware function
 */
export const requireRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return sendError(res, 401, 'Authentication required');
    }

    if (!req.userRole) {
      return sendError(res, 403, 'User role not found');
    }

    if (!roles.includes(req.userRole)) {
      return sendError(
        res,
        403,
        `Access denied. Required role: ${roles.join(' or ')}`
      );
    }

    next();
  };
};

/**
 * Middleware to check if user is Admin
 */
export const requireAdmin = requireRole(ROLES.ADMIN);

/**
 * Middleware to check if user is Admin or Sub-Admin
 */
export const requireAdminOrSubAdmin = requireRole(ROLES.ADMIN, ROLES.SUB_ADMIN);
