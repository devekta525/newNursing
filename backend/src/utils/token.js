import jwt from 'jsonwebtoken';

/**
 * Generate access token (1 day expiry)
 * @param {Object} payload - Token payload (userId, role, etc.)
 * @returns {string} - JWT access token
 */
export const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d', // 1 day limit
  });
};


/**
 * Verify access token
 * @param {string} token - JWT access token
 * @returns {Object} - Decoded token payload
 */
export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired access token');
  }
};

