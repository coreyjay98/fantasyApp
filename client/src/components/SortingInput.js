import { useEffect, useState } from 'react';
import usePlayerContext from '../hooks/usePlayerContext';
import { DebounceInput } from 'react-debounce-input';

const SortingInput = ({ allPlayers }) => {
  const [searchInput, setSearchInput] = useState('');
  const {
    playerData,
    setPlayers,
    resetSlice,
    setSliceNumber,
    sliceNumber,
    searching,
  } = usePlayerContext();

  const userInput = ({ target }) => {
    setSearchInput(target.value);
  };
  useEffect(() => {
    if (searchInput === '') {
      return (async () => {
        const res = await fetch('/api/players');
        const response = await res.json();
        await setPlayers(
          response.slice(sliceNumber * 10, sliceNumber * 10 + 50)
        );
      })();
    }
    const input = searchInput.charAt(0).toUpperCase() + searchInput.slice(1);
    (async () => {
      const res = await fetch(`api/player/${input}`);
      const response = await res.json();
      if (response.length) setPlayers(response);
    })();
  }, [searchInput]);

  return (
    <>
      {!searching && (
        <DebounceInput
          minLength={4}
          debounceTimeout={500}
          onChange={userInput}
          placeholder="Search Players"
        />
      )}
    </>
  );
};

export default SortingInput;
