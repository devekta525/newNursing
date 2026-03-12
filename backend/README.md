# Nursing Sarathi Backend

Production-ready backend API for Nursing Sarathi built with Node.js, Express.js, MongoDB, and JWT authentication.

## 🚀 Features

- **JWT Authentication** - Access tokens (15 min) and Refresh tokens (7 days)
- **Role-Based Access Control (RBAC)** - ADMIN, SUB_ADMIN, USER roles
- **Secure Password Hashing** - bcrypt with salt rounds ≥ 10
- **RESTful API** - Clean, consistent API design
- **Input Validation** - express-validator for request validation
- **Security** - Helmet, CORS, Rate limiting
- **Error Handling** - Centralized error handling middleware
- **MongoDB Indexing** - Optimized database queries

## 📁 Project Structure

```
src/
 ├── config/
 │    ├── db.js              # MongoDB connection
 │    └── roles.js            # RBAC configuration
 ├── models/
 │    ├── User.model.js       # User schema
 │    └── RefreshToken.model.js # Refresh token schema
 ├── controllers/
 │    ├── auth.controller.js  # Authentication endpoints
 │    ├── admin.controller.js # Admin endpoints
 │    └── profile.controller.js # Profile endpoints
 ├── routes/
 │    ├── auth.routes.js      # Auth routes
 │    ├── admin.routes.js     # Admin routes
 │    └── profile.routes.js   # Profile routes
 ├── middlewares/
 │    ├── auth.middleware.js  # JWT authentication
 │    ├── role.middleware.js  # Role-based access control
 │    └── error.middleware.js # Error handling
 ├── services/
 │    └── auth.service.js     # Authentication business logic
 ├── utils/
 │    ├── token.js            # JWT utilities
 │    └── response.js         # Response utilities
 ├── scripts/
 │    └── seed.js             # Admin user seed script
 ├── app.js                   # Express app configuration
 └── server.js                # Server entry point
```

## 🛠️ Tech Stack

- **Node.js** (LTS)
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **express-validator** - Input validation
- **helmet** - Security headers
- **cors** - Cross-origin resource sharing
- **express-rate-limit** - Rate limiting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nursing-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and configure:
   - `MONGODB_URI` - Your MongoDB connection string
   - `JWT_SECRET` - Secret key for access tokens (use a strong random string)
   - `JWT_REFRESH_SECRET` - Secret key for refresh tokens (use a strong random string)
   - `PORT` - Server port (default: 5000)
   - `FRONTEND_URL` - Your Next.js frontend URL

4. **Start MongoDB**
   Make sure MongoDB is running on your system or use MongoDB Atlas.

5. **Seed admin user** (Optional)
   ```bash
   npm run seed
   ```
   
   Default admin credentials:
   - Email: `admin@nursingsarathi.com`
   - Password: `Admin@123`
   
   ⚠️ **Change the default password after first login!**

6. **Start the server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

## 🔐 API Endpoints

### Authentication APIs

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| POST | `/api/auth/logout` | Logout user | No |
| POST | `/api/auth/refresh-token` | Refresh access token | No |

### Profile APIs

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/profile/me` | Get current user profile | Yes |
| PUT | `/api/profile/update` | Update profile | Yes |
| PUT | `/api/profile/change-password` | Change password | Yes |

### Admin APIs

| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---------------|---------------|
| POST | `/api/admin/create-subadmin` | Create sub-admin | Yes | ADMIN |
| GET | `/api/admin/subadmins` | Get all sub-admins | Yes | ADMIN |
| DELETE | `/api/admin/subadmin/:id` | Delete sub-admin | Yes | ADMIN |
| PUT | `/api/admin/subadmin/:id/password` | Update sub-admin password | Yes | ADMIN |
| PUT | `/api/admin/subadmin/:id/status` | Update sub-admin status | Yes | ADMIN |

## 📝 API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "errors": [
    // Validation errors (if any)
  ]
}
```

## 🔑 Authentication

### Using Access Token

Include the access token in the Authorization header:
```
Authorization: Bearer <access_token>
```

### Token Refresh Flow

1. Access token expires after 15 minutes
2. Use refresh token to get a new access token
3. Refresh token expires after 7 days
4. Refresh token can be sent in:
   - Request body: `{ "refreshToken": "..." }`
   - HTTP-only cookie (if enabled)

## 👥 User Roles

### ADMIN
- Full system access
- Can manage all users (ADMIN, SUB_ADMIN, USER)
- Can create sub-admins
- Can activate/deactivate users

### SUB_ADMIN
- Limited admin access
- Cannot manage ADMIN users
- Can manage other SUB_ADMIN and USER accounts

### USER
- Basic user access
- No admin privileges
- Can manage own profile

## 🛡️ Security Features

- **Password Hashing** - bcrypt with salt rounds ≥ 10
- **JWT Tokens** - Secure token-based authentication
- **Rate Limiting** - Login endpoint protected (5 attempts per 15 minutes)
- **Helmet** - Security headers
- **CORS** - Configured for Next.js frontend
- **Input Validation** - All inputs validated
- **Soft Delete** - Users deactivated, not deleted
- **Token Revocation** - Refresh tokens revoked on logout

## 🧪 Testing with Postman

Import the `Nursing_Sarathi_API.postman_collection.json` file into Postman to test all endpoints.

## 📋 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | Yes |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | JWT access token secret | Yes |
| `JWT_REFRESH_SECRET` | JWT refresh token secret | Yes |
| `FRONTEND_URL` | Frontend URL for CORS | Yes |
| `NODE_ENV` | Environment (development/production) | No |

## 🚨 Error Handling

The API uses centralized error handling:

- **400** - Bad Request (validation errors)
- **401** - Unauthorized (authentication required)
- **403** - Forbidden (insufficient permissions)
- **404** - Not Found
- **500** - Internal Server Error

## 📊 Database Schema

### User Schema
```javascript
{
  name: String,
  email: String (unique, indexed),
  phone: String,
  password: String (hashed),
  role: ['ADMIN', 'SUB_ADMIN', 'USER'],
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Refresh Token Schema
```javascript
{
  userId: ObjectId,
  token: String (unique, indexed),
  expiresAt: Date (auto-delete expired),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 Development

### Running in Development Mode
```bash
npm run dev
```

### Creating Admin User
```bash
npm run seed
```

## 📝 Notes

- Passwords are never returned in API responses
- Access tokens expire after 15 minutes
- Refresh tokens expire after 7 days
- Users are soft-deleted (isActive = false)
- All timestamps are automatically managed by Mongoose

## 🤝 Contributing

1. Follow the existing code structure
2. Use async/await (no callbacks)
3. Add proper error handling
4. Validate all inputs
5. Follow REST API best practices

## 📄 License

ISC

---

**Built with ❤️ for Nursing Sarathi**
