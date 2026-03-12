import dotenv from 'dotenv';
import User from '../models/User.model.js';
import connectDB from '../config/db.js';

// Load environment variables
dotenv.config();

/**
 * Seed script to create an admin user
 * Usage: npm run seed
 */
const seedAdmin = async () => {
  try {
    // Connect to database
    await connectDB();

    // Admin user data
    const adminData = {
      name: process.env.ADMIN_NAME || 'Admin User',
      email: process.env.ADMIN_EMAIL || 'admin@nursingsarathi.com',
      phone: process.env.ADMIN_PHONE || '+919200110011',
      password: process.env.ADMIN_PASSWORD || 'Admin@123',
      role: 'ADMIN',
      isActive: true,
    };

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminData.email });

    if (existingAdmin) {
      console.log('⚠️  Admin user already exists with email:', adminData.email);
      console.log('   Skipping seed...');
      process.exit(0);
    }

    // Create admin user
    const admin = await User.create(adminData);

    console.log('✅ Admin user created successfully!');
    console.log('📧 Email:', admin.email);
    console.log('👤 Name:', admin.name);
    console.log('🔑 Role:', admin.role);
    console.log('\n⚠️  Please change the default password after first login!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding admin user:', error.message);
    process.exit(1);
  }
};

// Run seed
seedAdmin();
