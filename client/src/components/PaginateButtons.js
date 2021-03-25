import usePlayerContext from '../hooks/usePlayerContext';

const PaginateButtons = () => {
  const { setSliceNumber } = usePlayerContext();
  return (
    <div className="paginate">
      <button onClick={() => setSliceNumber('Prev')}>Prev</button>
      <button onClick={() => setSliceNumber('Next')}>Next</button>
    </div>
  );
};

export default PaginateButtons;
