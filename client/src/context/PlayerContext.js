import { useState, createContext, useEffect } from 'react';

const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [playerTeam, _setPlayerTeam] = useState({});
  const [selectedPlayer, _setSelectedPlayer] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/players');
      const response = await res.json();
      await setAllPlayers(response);
    })();
  }, []);

  const addNewPlayer = (position, player) => {
    _setPlayerTeam((playerTeam) => ({ ...playerTeam, [position]: player }));
  };

  const removePlayerFromAll = (player) => {
    const filtered = allPlayers.filter((el) => el !== player);
    setAllPlayers(filtered);
  };

  const setPlayerTeam = (team) => {
    _setPlayerTeam(team);
  };

  const setSelectedPlayer = (player) => {
    _setSelectedPlayer(player);
  };

  return (
    <PlayerContext.Provider
      value={{
        allPlayers,
        playerTeam,
        addNewPlayer,
        setPlayerTeam,
        removePlayerFromAll,
        selectedPlayer,
        setSelectedPlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
export { PlayerContextProvider };
