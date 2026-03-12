import { sendError } from '../utils/response.js';

/**
 * Centralized Error Handling Middleware
 * Catches all errors and sends standardized error responses
 */
export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map((e) => e.message);
    return sendError(res, 400, 'Validation failed', errors);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return sendError(res, 400, `${field} already exists`);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return sendError(res, 401, 'Invalid token');
  }

  if (err.name === 'TokenExpiredError') {
    return sendError(res, 401, 'Token expired');
  }

  // Custom application errors
  if (err.message) {
    const statusCode = err.statusCode || 500;
    return sendError(res, statusCode, err.message);
  }

  // Default error
  return sendError(
    res,
    500,
    'Internal server error',
    process.env.NODE_ENV === 'development' ? err.stack : undefined
  );
};

/**
 * 404 Not Found Middleware
 */
export const notFound = (req, res) => {
  return sendError(res, 404, `Route ${req.originalUrl} not found`);
};
