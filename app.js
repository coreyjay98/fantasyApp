const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const ck = require('ckey');
const { playerData } = require('./populate');
const { inputPlayerData } = require('./server/controller/orm');

const User = require('./server/models/User');
const Player = require('./server/models/Players');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', require('./server/routes/authRoutes'));
app.use('/api', require('./server/routes/apiRoutes'));
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose
  .connect(ck.DB_URL || 'mongodb://localhost/futball', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    inputPlayerData(playerData);
    app.listen(8080, console.log('listening'));
  });
