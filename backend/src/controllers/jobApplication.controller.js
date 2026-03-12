import { validationResult } from 'express-validator';
import JobApplication from '../models/JobApplication.model.js';
import Job from '../models/Job.model.js';
import { sendSuccess, sendError } from '../utils/response.js';

/**
 * Apply to a Job
 * POST /api/applications
 * Protected: Authenticated Users
 */
export const applyJob = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation failed', errors.array());
    }

    const { jobId, experience, coverLetter } = req.body;

    // Check if job exists and is open
    const job = await Job.findById(jobId);
    if (!job) {
      return sendError(res, 404, 'Job not found');
    }
    if (job.status !== 'OPEN') {
      return sendError(res, 400, 'This job is no longer open for applications');
    }

    // Attempt to create the application
    try {
      const application = await JobApplication.create({
        job: jobId,
        applicant: req.userId,
        experience,
        coverLetter,
        status: 'Applied'
      });

      return sendSuccess(res, 201, 'Successfully applied for the job', { application });
    } catch (dbError) {
      // If there's a duplicate key error (11000) from our unique index
      if (dbError.code === 11000) {
        return sendError(res, 400, 'You have already applied for this job');
      }
      throw dbError; // Rethrow to be caught by the outer catch
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Get user's own applications
 * GET /api/applications/me
 * Protected: Authenticated Users
 */
export const getMyApplications = async (req, res, next) => {
  try {
    const applications = await JobApplication.find({ applicant: req.userId })
      .sort({ createdAt: -1 })
      .populate('job', 'title location salary status');

    return sendSuccess(res, 200, 'Applications retrieved successfully', { applications });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all applications for a specific job
 * GET /api/applications/job/:jobId
 * Protected: Admin, SubAdmin
 */
export const getJobApplications = async (req, res, next) => {
  try {
    const { jobId } = req.params;
    
    // Check if the job exists first
    const job = await Job.findById(jobId);
    if (!job) {
       return sendError(res, 404, 'Job not found');
    }

    const applications = await JobApplication.find({ job: jobId })
      .sort({ createdAt: -1 })
      .populate('applicant', 'name email phone');

    return sendSuccess(res, 200, 'Job applications retrieved successfully', { 
      job: job.title,
      applications 
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update application status ('Applied', 'Shortlisted', 'Rejected', 'Hired')
 * PUT /api/applications/:id/status
 * Protected: Admin, SubAdmin
 */
export const updateApplicationStatus = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendError(res, 400, 'Validation failed', errors.array());
    }

    const { id } = req.params;
    const { status } = req.body;

    const application = await JobApplication.findByIdAndUpdate(
      id, 
      { status }, 
      { new: true, runValidators: true }
    );

    if (!application) {
      return sendError(res, 404, 'Application not found');
    }

    return sendSuccess(res, 200, 'Application status updated successfully', { application });
  } catch (error) {
    next(error);
  }
};
