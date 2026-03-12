/**
 * Role-based access control configuration
 * Defines user roles and their hierarchy
 */

export const ROLES = {
  ADMIN: 'ADMIN',
  SUB_ADMIN: 'SUB_ADMIN',
  USER: 'USER',
};

/**
 * Check if a role has permission to manage another role
 * @param {string} userRole - The role of the user performing the action
 * @param {string} targetRole - The role of the target user
 * @returns {boolean} - True if user can manage target
 */
export const canManageRole = (userRole, targetRole) => {
  // Admin can manage everyone
  if (userRole === ROLES.ADMIN) {
    return true;
  }

  // Sub-Admin cannot manage Admin
  if (userRole === ROLES.SUB_ADMIN && targetRole === ROLES.ADMIN) {
    return false;
  }

  // Sub-Admin can manage other Sub-Admins and Users
  if (userRole === ROLES.SUB_ADMIN) {
    return targetRole === ROLES.SUB_ADMIN || targetRole === ROLES.USER;
  }

  // Users cannot manage anyone
  return false;
};

/**
 * Get all roles that a user can manage
 * @param {string} userRole - The role of the user
 * @returns {string[]} - Array of roles that can be managed
 */
export const getManageableRoles = (userRole) => {
  if (userRole === ROLES.ADMIN) {
    return [ROLES.ADMIN, ROLES.SUB_ADMIN, ROLES.USER];
  }
  if (userRole === ROLES.SUB_ADMIN) {
    return [ROLES.SUB_ADMIN, ROLES.USER];
  }
  return [];
};
