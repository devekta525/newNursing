import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: [true, 'Blog title is required'], 
      trim: true 
    },
    slug: { 
      type: String, 
      required: [true, 'Slug is required'], 
      unique: true,
      trim: true,
      index: true
    },
    content: { 
      type: String, 
      required: [true, 'Blog content is required'] 
    },
    metaTitle: { 
      type: String, 
      trim: true 
    },
    metaDescription: { 
      type: String, 
      trim: true 
    },
    featuredImage: { 
      type: String, 
      trim: true 
    },
    schemaToggle: {
      type: Boolean,
      default: true // true maps to 'Article' SEO schema type
    },
    status: {
      type: String,
      enum: ['DRAFT', 'PUBLISHED'],
      default: 'DRAFT',
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

export default mongoose.model('Blog', blogSchema);
