const express = require('express');
const fetch = require('node-fetch');
const app = express();
const Player = require('../models/Players');
const User = require('../models/User');
const authCheck = require('../middleware/auth');
const ck = require('ckey');

const { inputPlayerData } = require('../controller/orm');

/* app.get('/player', async (req, res) => {
  console.log('hi');
  for (let i = 30; i <= 37; i++) {
    console.log('i', i);
    try {
      const result = await fetch(
        `https://v3.football.api-sports.io/players?league=39&season=2020&page=${i}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': ck.REACT_APP_APIKEY,
          },
        }
      );
      const response = await result.json();
      console.log('length', response.response.length);
      inputPlayerData(response.response);
    } catch (err) {
      console.log(err);
    }
  }
}); */

/* app.get('/playerTest', async (req, res) => {
  const result = await fetch(
    `https://v3.football.api-sports.io/players?league=39&season=2020&page=${31}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': ck.REACT_APP_APIKEY,
      },
    }
  );
  const response = await result.json();
  console.log(response.response.length);
  res.send(response);
}); */

app.get('/players', async (req, res) => {
  const find = await Player.find();
  res.send(find);
});

app.get('/player/:name', async (req, res) => {
  const { name } = req.params;
  const find = await Player.find({ lastName: name });
  res.send(find);
});
app.get('/team/:team', async (req, res) => {
  const { team } = req.params;
  const find = await Player.find({ 'team.teamName': team });
  res.send(find);
});

app.post('/team', authCheck, async (req, res) => {
  console.log(req.body.playerTeam);
  const validTeam = Object.values(req.body.playerTeam).filter((el) => el === 0);
  console.log(validTeam.length);
  if (validTeam.length) {
    return res.send({ success: false, message: 'Not Enough Players' });
  }
  const response = await User.findOneAndUpdate(
    { _id: req.user.id },
    { team: req.body.playerTeam }
  );
  if (response) {
    res.send({ success: true, message: 'Team Saved' });
  } else {
    res.send({ success: false, message: 'Team Not Saved' });
  }
});

module.exports = app;
