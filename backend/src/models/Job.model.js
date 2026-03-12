import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: [true, 'Job title is required'], 
      trim: true 
    },
    description: { 
      type: String, 
      required: [true, 'Job description is required'] 
    },
    requirements: { 
      type: String, 
      required: [true, 'Job requirements are required'] 
    },
    location: { 
      type: String, 
      required: [true, 'Job location is required'] 
    },
    salary: { 
      type: String, // String for flexibility like "50,000 - 60,000 INR"
      trim: true 
    },
    status: {
      type: String,
      enum: ['OPEN', 'CLOSED'],
      default: 'OPEN',
      index: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { 
    timestamps: true 
  }
);

export default mongoose.model('Job', jobSchema);
