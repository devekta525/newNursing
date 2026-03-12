import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    state: {
      type: String,
      required: [true, 'State is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    serviceRequired: {
      type: String,
      required: [true, 'Service required is required'],
      trim: true,
    },
    whenRequired: {
      type: String,
      required: [true, 'When required is required'],
      trim: true,
    },
    patientCondition: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CONTACTED', 'RESOLVED'],
      default: 'PENDING',
    },
    remarks: {
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

// Add index for faster queries
enquirySchema.index({ status: 1 });
enquirySchema.index({ createdAt: -1 });

const Enquiry = mongoose.model('Enquiry', enquirySchema);

export default Enquiry;
