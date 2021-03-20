const mongoose = require('mongoose');
const Player = require('../models/Players');

module.exports = {
  inputPlayerData: async (data) => {
    data.forEach((entry) => {
      const { player, statistics } = entry;
      console.log(player.name);
      Player.create({
        playerId: player.id,
        firstName: player.firstname,
        lastName: player.lastname,
        nationality: player.birth.country,
        photo: player.photo,
        team: {
          teamName: statistics[0].team.name,
          teamId: statistics[0].team.id,
          teamLogo: statistics[0].team.logo,
        },
        games: {
          appearances: statistics[0].games.appearences,
          goals: statistics[0].goals.total,
        },
      });
      console.log(entry);
    });
  },
};
