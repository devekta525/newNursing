import Enquiry from '../models/Enquiry.model.js';
import { validationResult } from 'express-validator';
import { sendSuccess, sendError } from '../utils/response.js';

/**
 * @desc    Create a new enquiry
 * @route   POST /api/enquiries
 * @access  Public
 */
export const createEnquiry = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation Error', errors.array());
    }

    const {
      name,
      phone,
      state,
      city,
      serviceRequired,
      whenRequired,
      patientCondition,
    } = req.body;

    const enquiry = await Enquiry.create({
      name,
      phone,
      state,
      city,
      serviceRequired,
      whenRequired,
      patientCondition,
    });

    return sendSuccess(
      res,
      201,
      'Enquiry submitted successfully. We will get back to you soon!',
      enquiry
    );
  } catch (error) {
    console.error('Create Enquiry Error:', error);
    return sendError(res, 500, 'Internal server error');
  }
};

/**
 * @desc    Get all enquiries with pagination and filtering
 * @route   GET /api/enquiries
 * @access  Private (ADMIN, SUB_ADMIN)
 */
export const getEnquiries = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Filtering
    const filter = {};
    if (req.query.status) {
      filter.status = req.query.status;
    }
    
    // Search
    if (req.query.search) {
      filter.$or = [
        { name: { $regex: req.query.search, $options: 'i' } },
        { phone: { $regex: req.query.search, $options: 'i' } },
        { city: { $regex: req.query.search, $options: 'i' } },
        { state: { $regex: req.query.search, $options: 'i' } },
      ];
    }

    const enquiries = await Enquiry.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Enquiry.countDocuments(filter);

    return sendSuccess(res, 200, 'Enquiries fetched successfully', {
      enquiries,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get Enquiries Error:', error);
    return sendError(res, 500, 'Internal server error');
  }
};

/**
 * @desc    Get single enquiry by ID
 * @route   GET /api/enquiries/:id
 * @access  Private (ADMIN, SUB_ADMIN)
 */
export const getEnquiryById = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation Error', errors.array());
    }

    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return sendError(res, 404, 'Enquiry not found');
    }

    return sendSuccess(res, 200, 'Enquiry fetched successfully', enquiry);
  } catch (error) {
    console.error('Get Enquiry By ID Error:', error);
    if (error.kind === 'ObjectId') {
      return sendError(res, 400, 'Invalid enquiry ID format');
    }
    return sendError(res, 500, 'Internal server error');
  }
};

/**
 * @desc    Update enquiry status
 * @route   PATCH /api/enquiries/:id/status
 * @access  Private (ADMIN, SUB_ADMIN)
 */
export const updateEnquiryStatus = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation Error', errors.array());
    }

    const { status } = req.body;

    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return sendError(res, 404, 'Enquiry not found');
    }

    enquiry.status = status;

    await enquiry.save();

    return sendSuccess(res, 200, 'Enquiry status updated successfully', enquiry);
  } catch (error) {
    console.error('Update Enquiry Status Error:', error);
    if (error.kind === 'ObjectId') {
      return sendError(res, 400, 'Invalid enquiry ID format');
    }
    return sendError(res, 500, 'Internal server error');
  }
};

/**
 * @desc    Delete an enquiry
 * @route   DELETE /api/enquiries/:id
 * @access  Private (ADMIN, SUB_ADMIN)
 */
export const deleteEnquiry = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation Error', errors.array());
    }

    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return sendError(res, 404, 'Enquiry not found');
    }

    await enquiry.deleteOne();

    return sendSuccess(res, 200, 'Enquiry deleted successfully', null);
  } catch (error) {
    console.error('Delete Enquiry Error:', error);
    if (error.kind === 'ObjectId') {
      return sendError(res, 400, 'Invalid enquiry ID format');
    }
    return sendError(res, 500, 'Internal server error');
  }
};
