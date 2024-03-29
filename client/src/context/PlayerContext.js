import { useState, createContext, useEffect } from 'react';

const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const [playerData, setPlayerData] = useState([]);
  const [allPlayers, setAllPlayers] = useState([]);
  const [playerTeam, _setPlayerTeam] = useState({});
  const [selectedPlayer, _setSelectedPlayer] = useState({});
  const [sliceNumber, _setSliceNumber] = useState(0);
  const [searching, _setSearching] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/players');
      const response = await res.json();
      setAllPlayers([]);
      setPlayerData(response);
      await setAllPlayers(
        response.slice(sliceNumber * 10, sliceNumber * 10 + 50)
      );
    })();
  }, [sliceNumber]);

  const addNewPlayer = (position, player) => {
    _setPlayerTeam((playerTeam) => ({ ...playerTeam, [position]: player }));
  };

  const setPlayerTeam = (team) => {
    _setPlayerTeam(team);
  };

  const setSelectedPlayer = (player) => {
    _setSelectedPlayer({});
    _setSelectedPlayer(player);
  };

  const setSliceNumber = (operation) => {
    _setSliceNumber((sliceNumber) =>
      operation === 'Next' ? (sliceNumber += 1) : (sliceNumber -= 1)
    );
  };
  const resetSlice = () => {
    _setSliceNumber(1);
  };
  const setPlayers = (data) => {
    setAllPlayers(data);
  };
  const setSearching = (result) => {
    _setSearching(result);
  };

  return (
    <PlayerContext.Provider
      value={{
        allPlayers,
        playerTeam,
        addNewPlayer,
        setPlayerTeam,
        selectedPlayer,
        setSelectedPlayer,
        playerData,
        setSliceNumber,
        sliceNumber,
        setPlayerData,
        setPlayers,
        resetSlice,
        searching,
        setSearching,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
export { PlayerContextProvider };
