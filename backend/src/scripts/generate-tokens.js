import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User.model.js';
import { generateAccessToken } from '../utils/token.js';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const generateTokens = async () => {
  await connectDB();

  console.log('--- Generating Fresh Tokens ---');

  const roles = ['ADMIN', 'SUB_ADMIN', 'USER'];

  for (const role of roles) {
    const user = await User.findOne({ role: role, isActive: true });
    
    if (user) {
      const token = generateAccessToken({
        userId: user._id.toString(),
        role: user.role,
        email: user.email,
      });
      
      console.log(`\n✅ ${role} Token (User: ${user.email}):`);
      console.log(`Bearer ${token}`);
    } else {
      console.log(`\n❌ No active ${role} found in the database. Run registration to create one.`);
    }
  }

  console.log('\n-------------------------------');
  process.exit(0);
};

generateTokens();
