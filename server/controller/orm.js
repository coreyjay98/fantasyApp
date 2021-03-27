const mongoose = require('mongoose');
const Player = require('../models/Players');

module.exports = {
  inputPlayerData: async (data) => {
    data.forEach(async (player) => {
      console.log(player);
      await Player.create({
        playerId: player.playerID,
        firstName: player.firstname,
        lastName: player.lastname,
        nationality: player.nationality,
        photo: player.photo,
        position: player.position,
        team: {
          teamName: player.team.teamName,
          teamId: player.team.teamId,
          teamLogo: player.team.teamLogo,
        },
        games: {
          appearances: player.games.appearances,
          goals: player.games.goals,
          assists: player.games.assists,
          cards: player.games.cards,
        },
      });
    });
  },
};
