const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const User = require('../models/User');
const authCheck = require('../middleware/auth');

app.post('/register', async ({ body }, res) => {
  const { username, password } = body;
  const salt = await bcrypt.genSalt(9);
  const hash = await bcrypt.hash(password, salt);
  try {
    const newUser = await User.create({
      username,
      password: hash,
    });
    const token = jwt.sign({ id: newUser.id }, 'secret', { expiresIn: '24h' });
    res.json({
      token,
      username,
      id: newUser.id,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false });
  }
});

app.post('/login', async ({ body }, res) => {
  console.log(body);
  const { username, password } = body;
  const user = await User.findOne({ username });
  if (!user)
    return res
      .status(401)
      .json({ success: false, message: 'User does not exist' });
  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return res
      .status(401)
      .json({ success: false, message: 'Password does not match' });
  const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '24h' });
  res.json({
    token,
    username,
    id: user.id,
    userTeam: user.team,
    success: true,
  });
});

app.get('/profile', authCheck, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({
    username: user.username,
    userId: user.id,
    userTeam: user.team ? user.team : null,
  });
});

module.exports = app;
