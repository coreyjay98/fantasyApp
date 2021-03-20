const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  playerId: Number,
  firstName: String,
  lastName: String,
  nationality: String,
  photo: String,
  team: {
    teamName: String,
    teamId: Number,
    teamLogo: String,
  },
  games: {
    appearances: Number,
    goals: Number,
  },
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
