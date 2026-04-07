#!/bin/bash

# Script to automatically create GitHub Issues from ISSUES.md
# Requirements: GitHub CLI (gh) must be installed and authenticated
# Usage: bash scripts/create-issues.sh

set -e

echo "🚀 GitHub Issues Auto-Creator"
echo "=============================="
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed"
    echo "Install from: https://cli.github.com/"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub CLI"
    echo "Run: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI authenticated"
echo ""

# Get the repository info
REPO=$(gh repo view --json nameWithOwner -q)
echo "📦 Repository: $REPO"
echo ""

# Function to create an issue
create_issue() {
    local title=$1
    local body=$2
    local labels=$3
    
    echo "Creating issue: $title"
    
    if [ -z "$labels" ]; then
        gh issue create --title "$title" --body "$body" --repo "$REPO"
    else
        gh issue create --title "$title" --body "$body" --label "$labels" --repo "$REPO"
    fi
}

echo "📋 Creating Backend Issues..."
echo ""

# Backend Critical Bugs
create_issue \
    "Fix syntax error in server.js - Missing > in arrow function" \
    "**File:** backend/server.js (line 18)\n\n**Issue:** Arrow function is missing the > symbol\n\n**Difficulty:** Easy\n\n**How to fix:**\nArrow function on line 18 shows:\n\`\`\`js\napp.get('/api/students', (req, res) = {\n\`\`\`\n\nShould be:\n\`\`\`js\napp.get('/api/students', (req, res) => {\n\`\`\`" \
    "bug,backend,easy,good-first-issue"

create_issue \
    "Fix typo in server.js - cors module name is incorrect" \
    "**File:** backend/server.js (line 4)\n\n**Issue:** Typo in cors module import\n\n**Difficulty:** Easy\n\n**How to fix:**\nLine 4 shows:\n\`\`\`js\nconst cors = require('cor');\n\`\`\`\n\nShould be:\n\`\`\`js\nconst cors = require('cors');\n\`\`\`" \
    "bug,backend,easy,good-first-issue"

create_issue \
    "Fix Course schema syntax error - 'required true' missing colon" \
    "**File:** backend/models/Course.js (line 11)\n\n**Issue:** Syntax error in schema definition\n\n**Difficulty:** Easy\n\n**Current code:**\n\`\`\`js\ncourseName: {\n  type: String,\n  required true\n}\n\`\`\`\n\n**Should be:**\n\`\`\`js\ncourseName: {\n  type: String,\n  required: true\n}\n\`\`\`" \
    "bug,backend,models,easy,good-first-issue"

create_issue \
    "Fix missing comma in Student model - gpa field" \
    "**File:** backend/models/Student.js\n\n**Issue:** Missing comma after type definition\n\n**Difficulty:** Easy\n\n**Current code:**\n\`\`\`js\ngpa: {\n  type: Number\n}\n\`\`\`\n\n**Should be:**\n\`\`\`js\ngpa: {\n  type: Number,\n}\n\`\`\`" \
    "bug,backend,models,easy,good-first-issue"

create_issue \
    "Implement MongoDB database connection in server.js" \
    "**File:** backend/server.js\n\n**Issue:** Database connection is commented out and not implemented\n\n**Difficulty:** Medium\n\n**What to do:**\n1. Import mongoose package\n2. Get MONGODB_URI from environment variables\n3. Connect to MongoDB and handle connection errors\n4. Test the connection\n\n**Resources:**\n- Mongoose docs: https://mongoosejs.com/docs/connections.html" \
    "bug,backend,database,medium"

create_issue \
    "Implement authentication middleware - missing null check" \
    "**File:** backend/middleware/auth.js\n\n**Issue:** Missing error handling when authorization header is empty\n\n**Difficulty:** Medium\n\n**What to fix:**\n1. Check if authorization header exists before splitting\n2. Add proper error handling\n3. Ensure JWT_SECRET is loaded from environment\n\n**Current issue:**\nCode attempts to split header without checking if it exists first" \
    "bug,backend,auth,medium"

create_issue \
    "Implement admin middleware - missing next() call" \
    "**File:** backend/middleware/auth.js\n\n**Issue:** adminMiddleware doesn't call next() after authorization check\n\n**Difficulty:** Easy\n\n**What to fix:**\nAdd \`next();\` call after successful admin authorization" \
    "bug,backend,auth,easy"

create_issue \
    "Implement GET /api/professors endpoint" \
    "**File:** backend/server.js\n\n**Issue:** Route handler has syntax error (missing parenthesis)\n\n**Difficulty:** Easy\n\n**Current code:**\n\`\`\`js\napp.get('/api/professors' (req, res) => {\n\`\`\`\n\n**Should be:**\n\`\`\`js\napp.get('/api/professors', (req, res) => {\n\`\`\`" \
    "bug,backend,routes,easy,good-first-issue"

create_issue \
    "Implement POST /api/auth/register endpoint" \
    "**File:** backend/server.js\n\n**Issue:** Endpoint is completely missing implementation\n\n**Difficulty:** Hard\n\n**What to implement:**\n1. Accept email, password, firstName, lastName\n2. Validate input\n3. Hash password using bcryptjs\n4. Check if user already exists\n5. Create new student record\n6. Return success response with JWT token" \
    "feature,backend,auth,hard"

create_issue \
    "Fix POST /api/auth/login - should use POST not GET" \
    "**File:** backend/server.js\n\n**Issue:** Login endpoint uses GET method instead of POST\n\n**Difficulty:** Hard\n\n**What to implement:**\n1. Change GET to POST\n2. Implement proper authentication\n3. Hash password comparison using bcryptjs\n4. Generate JWT token\n5. Return token on success" \
    "bug,backend,auth,hard"

create_issue \
    "Add Student model validations - firstName and timestamps" \
    "**File:** backend/models/Student.js\n\n**Issue:** Missing required validation and timestamps\n\n**Difficulty:** Medium\n\n**What to add:**\n1. Add required: true to firstName\n2. Add email validation\n3. Add timestamps: true to schema" \
    "enhancement,backend,models,medium"

create_issue \
    "Add Course model validations and missing fields" \
    "**File:** backend/models/Course.js\n\n**Issue:** Missing validations, unique constraints, and room field\n\n**Difficulty:** Medium\n\n**What to add:**\n1. Add unique: true to courseCode\n2. Add room/location field\n3. Add capacity validation\n4. Make professor required\n5. Add course number validation" \
    "enhancement,backend,models,medium"

echo ""
echo "📋 Creating Frontend Issues..."
echo ""

create_issue \
    "Fix deprecated ReactDOM.render in index.js" \
    "**File:** frontend/src/index.js\n\n**Issue:** ReactDOM.render is deprecated in React 18+\n\n**Difficulty:** Easy\n\n**What to fix:**\nReplace deprecated render with createRoot:\n\n\`\`\`js\nimport { createRoot } from 'react-dom/client';\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n\`\`\`" \
    "bug,frontend,easy,good-first-issue"

create_issue \
    "Fix HTML meta tag in index.html - invalid viewport" \
    "**File:** frontend/public/index.html\n\n**Issue:** Viewport meta tag is missing initial-scale\n\n**Difficulty:** Easy\n\n**Current meta tag:**\n\`\`\`html\n<meta name=\"viewport\" content=\"width=device-width\">\n\`\`\`\n\n**Should be:**\n\`\`\`html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\`\`\`" \
    "bug,frontend,html,easy,good-first-issue"

create_issue \
    "Fix HTML script tag in index.html - missing equals sign" \
    "**File:** frontend/public/index.html\n\n**Issue:** Script tag has syntax error in type attribute\n\n**Difficulty:** Easy\n\n**Current code:**\n\`\`\`html\n<script src=\"./index.js\" type\"text/javascript\" ></script>\n\`\`\`\n\n**Should be:**\n\`\`\`html\n<script src=\"./index.js\" type=\"text/javascript\"></script>\n\`\`\`" \
    "bug,frontend,html,easy,good-first-issue"

create_issue \
    "Fix hardcoded API URLs - use environment variables" \
    "**File:** frontend/src/*.js (multiple files)\n\n**Issue:** API endpoints are hardcoded to localhost:5000\n\n**Difficulty:** Medium\n\n**What to do:**\n1. Create .env file with REACT_APP_API_URL variable\n2. Replace all hardcoded URLs with process.env.REACT_APP_API_URL\n3. Test in development and production\n\n**Files to fix:**\n- App.js\n- pages/Home.js\n- pages/Students.js\n- pages/Courses.js" \
    "enhancement,frontend,medium"

create_issue \
    "Add error handling to API calls - missing catch blocks" \
    "**File:** frontend/src/pages/Home.js, Students.js, Courses.js\n\n**Issue:** Multiple API calls missing catch blocks for error handling\n\n**Difficulty:** Medium\n\n**What to fix:**\n1. Add .catch() blocks to all axios calls\n2. Store errors in state\n3. Display error messages to user\n4. Handle 404, 500, and network errors" \
    "bug,frontend,error-handling,medium"

create_issue \
    "Fix missing key prop in list items" \
    "**File:** frontend/src/pages/Home.js, Students.js, Courses.js\n\n**Issue:** React components rendering lists without key prop\n\n**Difficulty:** Easy\n\n**What to fix:** Add unique key prop to all .map() calls" \
    "bug,frontend,react,easy,good-first-issue"

create_issue \
    "Implement search functionality in Students page" \
    "**File:** frontend/src/pages/Students.js\n\n**Issue:** Search input exists but has no onChange handler\n\n**Difficulty:** Medium\n\n**What to implement:**\n1. Add onChange handler to search input\n2. Filter students based on search term\n3. Search by name and email\n4. Debounce search for performance" \
    "feature,frontend,students,medium"

create_issue \
    "Implement filter dropdown in Students page" \
    "**File:** frontend/src/pages/Students.js\n\n**Issue:** Filter dropdown missing onChange handler\n\n**Difficulty:** Medium\n\n**What to implement:**\n1. Add onChange handler to filter select\n2. Pass filter to API query parameters\n3. Filter students by status (active, graduated, etc.)" \
    "feature,frontend,students,medium"

create_issue \
    "Implement student delete functionality" \
    "**File:** frontend/src/pages/Students.js\n\n**Issue:** Delete button doesn't call API or update state\n\n**Difficulty:** Medium\n\n**What to implement:**\n1. Call DELETE /api/students/:id\n2. Remove from state on success\n3. Show confirmation dialog\n4. Handle errors" \
    "feature,frontend,students,medium"

create_issue \
    "Add Edit button and implement student update" \
    "**File:** frontend/src/pages/Students.js\n\n**Issue:** Edit button missing, update functionality not implemented\n\n**Difficulty:** Hard\n\n**What to implement:**\n1. Add Edit button in student actions\n2. Create modal or form for editing\n3. Call PUT /api/students/:id\n4. Update state on success" \
    "feature,frontend,students,hard"

create_issue \
    "Implement course enrollment functionality" \
    "**File:** frontend/src/pages/Courses.js\n\n**Issue:** Enroll button only logs, doesn't call API\n\n**Difficulty:** Medium\n\n**What to implement:**\n1. Implement enrollCourse to call POST /api/courses/:id/enroll\n2. Complete unenrollCourse function\n3. Update UI to show enrollment status\n4. Handle errors" \
    "feature,frontend,courses,medium"

create_issue \
    "Fix announcements loading state" \
    "**File:** frontend/src/pages/Home.js\n\n**Issue:** Loading state set to true but never set to false\n\n**Difficulty:** Easy\n\n**What to fix:**\n1. Call setLoading(false) in .then() block\n2. Call setLoading(false) in .catch() block\n3. Show loading spinner while fetching" \
    "bug,frontend,easy,good-first-issue"

create_issue \
    "Implement error boundary in App.js" \
    "**File:** frontend/src/App.js\n\n**Issue:** No error boundary component for error handling\n\n**Difficulty:** Medium\n\n**What to create:**\n1. Create ErrorBoundary component\n2. Wrap App with ErrorBoundary\n3. Display fallback UI on errors\n4. Log errors to console" \
    "feature,frontend,error-handling,medium"

create_issue \
    "Add navigation active state styling" \
    "**File:** frontend/src/components/Layout.js\n\n**Issue:** No visual indicator for current page\n\n**Difficulty:** Medium\n\n**What to implement:**\n1. Track current route\n2. Highlight active nav link\n3. Use NavLink from react-router-dom\n4. Add CSS for active state" \
    "enhancement,frontend,navigation,medium"

create_issue \
    "Fix navigation CSS class typo - nav-links" \
    "**File:** frontend/src/components/Layout.js\n\n**Issue:** CSS class name typo inconsistency\n\n**Difficulty:** Easy\n\n**What to fix:**\nChange all instances of nav-links to nav-link for consistency\n\n**Current:** \`className=\"nav-links\"\`\n**Should be:** \`className=\"nav-link\"\`" \
    "bug,frontend,styling,easy,good-first-issue"

echo ""
echo "📋 Creating CSS/Styling Issues..."
echo ""

create_issue \
    "Implement responsive design for mobile" \
    "**File:** frontend/src/styles/*.css\n\n**Issue:** Media queries are incomplete, mobile styles missing\n\n**Difficulty:** Medium\n\n**What to implement:**\n1. Add mobile-first CSS\n2. Complete media query breakpoints (768px, 1024px)\n3. Test on mobile devices\n4. Ensure touch-friendly buttons" \
    "enhancement,frontend,styling,responsive,medium"

create_issue \
    "Add hover effects and transitions to buttons" \
    "**File:** frontend/src/styles/*.css\n\n**Issue:** Buttons missing hover states and transitions\n\n**Difficulty:** Easy\n\n**What to add:**\n1. Add :hover pseudo-class to all buttons\n2. Add smooth transitions\n3. Add :active pseudo-class\n4. Add :disabled pseudo-class" \
    "enhancement,frontend,styling,easy"

create_issue \
    "Fix table styling - add row striping and borders" \
    "**File:** frontend/src/styles/Students.css\n\n**Issue:** Table needs better visual structure\n\n**Difficulty:** Easy\n\n**What to add:**\n1. Add alternating row background colors\n2. Add proper borders\n3. Improve padding and spacing\n4. Add hover effect on rows" \
    "enhancement,frontend,styling,easy"

create_issue \
    "Add focus states to form inputs" \
    "**File:** frontend/src/styles/*.css\n\n**Issue:** Input fields missing focus styling\n\n**Difficulty:** Easy\n\n**What to add:**\n1. Add :focus pseudo-class to inputs\n2. Add box-shadow or border color change\n3. Add outline removal and replacement\n4. Improve accessibility" \
    "enhancement,frontend,styling,accessibility,easy"

echo ""
echo "🎉 Issues created successfully!"
echo ""
echo "Visit your repository to see all created issues:"
echo "https://github.com/$REPO/issues"
