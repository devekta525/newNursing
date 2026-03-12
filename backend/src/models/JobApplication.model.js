import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
      index: true
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    status: {
      type: String,
      enum: ['Applied', 'Shortlisted', 'Rejected', 'Hired'],
      default: 'Applied',
      index: true
    },
    experience: { 
      type: String 
    },
    coverLetter: { 
      type: String 
    }
  },
  { 
    timestamps: true 
  }
);

// Prevent a user from applying to the same job multiple times
jobApplicationSchema.index({ job: 1, applicant: 1 }, { unique: true });

export default mongoose.model('JobApplication', jobApplicationSchema);
