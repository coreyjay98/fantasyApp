const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ck = require('ckey');

const authCheck = async (req, res, next) => {
  const token = req.header('authorization');
  if (!token) {
    res.status(401).json({ message: 'No token provided' });
  }

  const decoded = jwt.verify(token, ck.secret);
  const user = await User.findById(decoded.id);
  if (!user) {
    res.status(404).json({ message: 'User does not exist' });
  }

  req.user = decoded;
  next();
};
module.exports = authCheck;
