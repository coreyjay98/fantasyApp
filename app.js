const express = require('express');
const mongoose = require('mongoose');
const app = express();

const User = require('./server/models/User');
const Player = require('./server/models/Players');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', require('./server/routes/authRoutes'));
app.use('/api', require('./server/routes/apiRoutes'));

mongoose
  .connect('mongodb://localhost/futball', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    /*     User.create({
      username: 'Corey',
      password: 'Sam',
      team: {
        player1: 5,
        player2: 5,
        player3: 5,
        player4: 5,
        player5: 5,
        player6: 5,
        player7: 5,
        player8: 5,
        player9: 5,
        player10: 5,
        player11: 5,
      },
    }); */

    app.listen(3001, console.log('listening'));
  });
