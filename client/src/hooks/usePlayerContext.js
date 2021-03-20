import { useContext } from 'react';
import PlayerContext from '../context/PlayerContext';

const usePlayerContext = () => useContext(PlayerContext);
export default usePlayerContext;
