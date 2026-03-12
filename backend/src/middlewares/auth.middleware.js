import { verifyAccessToken } from '../utils/token.js';
import User from '../models/User.model.js';
import { sendError } from '../utils/response.js';

/**
 * Authentication Middleware
 * Verifies JWT access token and attaches user to request
 */
export const authenticate = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;    

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return sendError(res, 401, 'Authentication required. Please provide a valid token.');
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    // Verify token
    const decoded = verifyAccessToken(token);

    // Get user from database
    const user = await User.findById(decoded.userId);

    if (!user) {
      return sendError(res, 401, 'User not found. Token is invalid.');
    }

    if (!user.isActive) {
      return sendError(res, 403, 'Account is deactivated. Please contact administrator.');
    }

    // Attach user to request
    req.user = user;
    req.userId = decoded.userId;
    req.userRole = decoded.role;

    next();
  } catch (error) {
    return sendError(res, 401, error.message || 'Invalid or expired token.');
  }
};
