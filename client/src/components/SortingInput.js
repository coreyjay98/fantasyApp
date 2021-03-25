import { useEffect, useState } from 'react';
import usePlayerContext from '../hooks/usePlayerContext';

const SortingInput = ({ allPlayers, setAllPlayers }) => {
  const [searchInput, setSearchInput] = useState('');
  const { playerData } = usePlayerContext();

  const userInput = ({ target }) => {
    setSearchInput(target.value);
  };

  useEffect(() => {
    console.log(searchInput);
    const fil = playerData.filter(({ firstName }) => firstName === searchInput);
    console.log(fil);
  }, [searchInput]);

  return (
    <>
      <input type="text" onChange={userInput}></input>
    </>
  );
};

export default SortingInput;
