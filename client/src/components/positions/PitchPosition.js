import usePlayerContext from '../../hooks/usePlayerContext';
import { useDrop } from 'react-dnd';
import { FaTrash } from 'react-icons/fa';

const PitchPosition = ({ position, customClass, selectedPlayer }) => {
  const { addNewPlayer } = usePlayerContext();
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: ({ player }) => ({
      player,
      data: 'card',
      position,
    }),
    // props to collect
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const deleteSelection = () => {
    addNewPlayer(position, 0);
  };

  return (
    <>
      <div
        className={`${customClass} card ${
          selectedPlayer === 0 || selectedPlayer == undefined
            ? null
            : 'hoverDelete'
        }`}
        ref={drop}
        data="one"
        style={{
          border: isOver ? '2px solid red' : '2px solid blue',
        }}
      >
        {selectedPlayer === 0 || selectedPlayer === undefined ? null : (
          <>
            <div className="delete" onClick={deleteSelection}>
              <FaTrash />
            </div>
            <div
              className="photo"
              style={{ backgroundImage: `url(${selectedPlayer.photo})` }}
            ></div>
            <span className="name">
              <p>{selectedPlayer.lastName}</p>
            </span>
            <span className="position">CB</span>
          </>
        )}
      </div>
    </>
  );
};

export default PitchPosition;
