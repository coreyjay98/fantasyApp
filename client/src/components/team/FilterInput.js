import { useEffect, useState } from 'react';
import usePlayerContext from '../../hooks/usePlayerContext';
const FilterInput = () => {
  const [searchInput, setSearchInput] = useState('');
  const { setPlayers, setSearching, sliceNumber } = usePlayerContext();

  const filterChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput === '') return;
    if (searchInput === 'Refresh') {
      return (async () => {
        setSearching(false);
        const res = await fetch('/api/players');
        const response = await res.json();
        await setPlayers(
          response.slice(sliceNumber * 10, sliceNumber * 10 + 50)
        );
        setSearchInput('');
      })();
    }
    (async () => {
      setSearching(true);
      const res = await fetch(`api/team/${searchInput}`);
      const response = await res.json();
      if (response.length) setPlayers(response);
      setSearchInput('');
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <select name="teams" placeholder="Filter Teams" onChange={filterChange}>
      <option value="Refresh">All Teams</option>
      <optgroup label="Teams">
        <option value="Arsenal">Arsenal</option>
        <option value="Aston Villa">Aston Villa</option>
        <option value="Brighton">Brighton</option>
        <option value="Burnley">Burnley</option>
        <option value="Chelsea">Chelsea</option>
        <option value="Crystal Palace">Crystal Palace</option>
        <option value="Fulham">Fulham</option>
        <option value="Leeds">Leeds United</option>
        <option value="Leicester">Leicester City</option>
        <option value="Liverpool">Liverpool</option>
        <option value="Manchester City">Manchester City</option>
        <option value="Manchester United">Manchester United</option>
        <option value="Newcastle">Newcastle United</option>
        <option value="Sheffield Utd">Sheffield United</option>
        <option value="Southampton">Southampton</option>
        <option value="Tottenham">Tottenham Hotspur</option>
        <option value="West Brom">West Bromwich Albion</option>
        <option value="West Ham">West Ham United</option>
        <option value="Wolves">Wolverhampton</option>
      </optgroup>
    </select>
  );
};
export default FilterInput;
