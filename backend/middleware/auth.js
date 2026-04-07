const jwt = require('jsonwebtoken');

// BUG: Missing error handling for missing token
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  // BUG: No null check before accessing split
  
  try {
    // BUG: JWT_SECRET not defined from environment
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    // BUG: Generic error message, should be more specific
    res.status(401).json({ message: 'Unauthorized' })
  }
};

// BUG: Missing admin check middleware
const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    res.status(403).json({ message: 'Forbidden' });
  }
  // BUG: Missing next() call for successful authorization
};

// BUG: Missing validation middleware
// Should validate inputs but doesn't

module.exports = {
  authMiddleware,
  adminMiddleware
};
