import usePlayerContext from '../hooks/usePlayerContext';

const PaginateButtons = () => {
  const {
    setSliceNumber,
    sliceNumber,
    allPlayers,
    searching,
  } = usePlayerContext();
  return (
    <>
      {allPlayers.length > 10 && !searching && (
        <div className="paginate">
          {sliceNumber > 0 ? (
            <button onClick={() => setSliceNumber('Prev')}>Prev</button>
          ) : (
            <button className="emptyButton">Prev</button>
          )}
          <button onClick={() => setSliceNumber('Next')}>Next</button>
        </div>
      )}
    </>
  );
};

export default PaginateButtons;
