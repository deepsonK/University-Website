# Known Issues & Tasks

This document lists known issues and tasks that need to be completed. Feel free to pick one and submit a PR!

## Backend Issues

### Critical Bugs
- [ ] **Fix syntax error in server.js line 18** - Missing `>` in arrow function syntax
- [ ] **Fix typo in server.js line 4** - `require('cor')` should be `require('cors')`
- [ ] **Implement POST endpoint for course creation** - `/api/courses` POST handler missing
- [ ] **Fix missing authentication middleware** - Add auth middleware to protected routes
- [ ] **Database connection not implemented** - Need to connect to MongoDB in server.js

### Backend Routes
- [ ] **GET /api/students** - Returns empty, needs database query
- [ ] **POST /api/students** - Not implemented, needs validation and database insert
- [ ] **GET /api/students/:id** - Missing endpoint entirely
- [ ] **PUT /api/students/:id** - Missing endpoint, should be for updates
- [ ] **DELETE /api/students/:id** - Missing endpoint, should remove student
- [ ] **GET /api/courses** - Returns empty, needs filter support
- [ ] **POST /api/courses** - Not properly implemented
- [ ] **GET /api/professors** - Syntax error in code, needs fixing
- [ ] **POST /api/auth/register** - Missing entire implementation
- [ ] **POST /api/auth/login** - Currently GET method, should handle authentication properly
- [ ] **GET /api/announcements** - Not yet implemented

### Model Improvements
- [ ] **Student model** - Add missing fields: department, enrollmentYear, status
- [ ] **Course model** - Add missing validations and indexes
- [ ] **Fix Course schema** - `required true` syntax error on line 11
- [ ] **Add course enrollment tracking** - Track student enrollments properly
- [ ] **Add timestamps** - Add createdAt/updatedAt to all models

### Authentication & Security
- [ ] **Implement JWT token generation** - In login endpoint
- [ ] **Add password hashing** - Use bcryptjs for password storage
- [ ] **Validate user input** - Add input validation middleware
- [ ] **Add admin role checking** - Implement proper role-based access
- [ ] **Fix CORS configuration** - Add proper origin whitelist

### Environment & Configuration
- [ ] **Set up environment variables** - Configure `.env` properly
- [ ] **Add database connection string** - MongoDB URI setup
- [ ] **Configure JWT secret** - Set strong JWT_SECRET in environment

## Frontend Issues

### Critical React Bugs
- [ ] **Fix HTML meta tag in index.html** - Invalid viewport settings
- [ ] **Fix HTML script tag** - `type"text/javascript"` missing equals sign
- [ ] **Fix deprecated ReactDOM.render** - Use createRoot instead in index.js
- [ ] **Fix missing prop warnings** - Add key props to list items
- [ ] **Fix missing error boundaries** - Add error handling in App.js

### Route & Navigation
- [ ] **Fix broken navigation links** - Some links have missing onClick handlers
- [ ] **Implement working admin routes** - Add admin dashboard
- [ ] **Fix login button functionality** - Currently not functional
- [ ] **Improve error handling** - Add error display UI

### API Integration
- [ ] **Fix hardcoded API URLs** - Use environment variables
- [ ] **Add error handling to API calls** - Missing catch blocks
- [ ] **Implement proper loading states** - Show loading indicators
- [ ] **Add API error display** - Show errors to users

### Component Issues
- [ ] **Fix missing search functionality** - Search input has no handler
- [ ] **Fix filter dropdown** - onChange handler missing
- [ ] **Implement student delete** - API call not implemented
- [ ] **Implement student edit** - Button missing, functionality needed
- [ ] **Implement course enrollment** - Only logs, doesn't call API
- [ ] **Fix announcements display** - No empty state message
- [ ] **Fix styling issues** - Multiple CSS classes incomplete

### Styling & CSS
- [ ] **Fix navigation styling** - Missing hover effects
- [ ] **Implement responsive design** - Mobile styles missing
- [ ] **Fix table striping** - Alternating row colors missing
- [ ] **Add focus states** - Form inputs need focus styling
- [ ] **Fix button hover effects** - Most buttons missing hover states
- [ ] **Implement footer links** - Links not functional
- [ ] **Fix course grid** - Missing responsive grid layout
- [ ] **Add loading spinner** - CSS for loading state missing
- [ ] **Improve accessibility** - Fix contrast issues

### Feature Additions
- [ ] **Add student registration form** - New page needed
- [ ] **Add course enrollment UI** - Show enrollment confirmation
- [ ] **Add user profile page** - Display user information
- [ ] **Add pagination** - For large course/student lists
- [ ] **Add sorting functionality** - Sort students and courses
- [ ] **Add filtering options** - Department, program filters
- [ ] **Add search functionality** - Implement working search
- [ ] **Add date formatting** - Format announcement dates properly
- [ ] **Add icons** - Add missing Feature card icons

## General Issues

### Documentation
- [ ] **Update API documentation** - Document all endpoints
- [ ] **Add setup instructions** - More detailed setup guide
- [ ] **Add deployment guide** - How to deploy the application
- [ ] **Add architecture overview** - Explain project structure

### Testing
- [ ] **Add backend tests** - Create test suite for API
- [ ] **Add frontend tests** - Jest/React testing library
- [ ] **Add integration tests** - Test frontend-backend integration
- [ ] **Add E2E tests** - Cypress or similar

### DevOps & Deployment
- [ ] **Add Docker support** - Dockerfile for both services
- [ ] **Add CI/CD pipeline** - GitHub Actions workflows
- [ ] **Database migrations** - Schema version management
- [ ] **Deployment documentation** - How to deploy to production

## Difficulty Levels

**Easy** - Good for beginners:
- CSS fixes and styling
- HTML validation fixes
- Adding missing onClick handlers
- Fixing syntax errors

**Medium** - For intermediate developers:
- Implementing missing API endpoints
- Adding form validation
- Error handling improvements
- Adding loading states

**Hard** - For advanced developers:
- Complete authentication system
- Database integration
- Testing infrastructure
- Deployment automation

## How to Get Started

1. Find an issue that interests you
2. Comment on the issue to claim it
3. Fork the repository
4. Create a feature branch
5. Make your changes
6. Submit a pull request with a description of your changes

See CONTRIBUTING.md for more detailed guidelines!
