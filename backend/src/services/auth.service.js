import User from '../models/User.model.js';
import { generateAccessToken } from '../utils/token.js';

/**
 * Authentication Service
 * Handles all authentication-related business logic
 */

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Promise<Object>} - Created user object
 */
export const registerUser = async (userData) => {
  const { name, email, phone, password, role = 'USER' } = userData;

  // Check if user already exists
  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Create new user
  const user = await User.create({
    name,
    email: email.toLowerCase(),
    phone,
    password,
    role,
  });

  return user;
};

/**
 * Login user and generate tokens
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} - User object with tokens
 */
export const loginUser = async (email, password) => {
  // Find user with password field
  const user = await User.findOne({ email: email.toLowerCase() }).select('+password');

  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Check if user is active
  if (!user.isActive) {
    throw new Error('Account is deactivated. Please contact administrator.');
  }

  // Verify password
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  // Update last login
  user.lastLogin = new Date();
  await user.save();

  // Generate tokens
  const accessToken = generateAccessToken({
    userId: user._id.toString(),
    role: user.role,
    email: user.email,
  });

  return {
    user,
    accessToken,
  };
};

/**
 * Logout user by removing refresh token
 * @param {string} refreshTokenString - Refresh token to revoke
 * @returns {Promise<void>}
 */
export const logoutUser = async (refreshTokenString) => {
  // Stateless token doesn't require DB invalidation
};

/**
 * Logout user from all devices
 * @param {string} userId - User ID
 * @returns {Promise<void>}
 */
export const logoutAllDevices = async (userId) => {
  // Stateless token doesn't require DB invalidation
};
