const jwt = require('jsonwebtoken');
const config = require('config');

const auth = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).jso({ msg: 'NO token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
module.exports = auth;
