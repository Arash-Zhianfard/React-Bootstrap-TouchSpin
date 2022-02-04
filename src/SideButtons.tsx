import { Alignment, ChildProps } from './Type';
const SideButtons = ({
  onIncreaseHandler,
  OnDecreaseHandler,
  OnStopCounter,
  signAlignment,
  sign,
  counter,
  decimals,
}: ChildProps) => {
  const increaseHandler = () => {
    onIncreaseHandler();
  };
  const decreaseHandler = () => {
    OnDecreaseHandler();
  };
  const stopCounter = () => {
    OnStopCounter();
  };

  return (
    <div className={`input-group`}>
      <div className="input-group-prepend">
        <button
          className={`input-group-text `}
          onMouseDown={decreaseHandler}
          onMouseUp={stopCounter}
        >
          -
        </button>
        {sign && signAlignment === Alignment.Left && (
          <span className="input-group-text">{sign}</span>
        )}
      </div>
      <input
        type="text"
        className="form-control"
        value={counter.toFixed(decimals)}
        readOnly
        style={{ background: 'white' }}
      />
      <div className="input-group-append">
        {sign && signAlignment === Alignment.Right && (
          <span className="input-group-text">{sign}</span>
        )}
        <button
          className="input-group-text "
          onMouseDown={increaseHandler}
          onMouseUp={stopCounter}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default SideButtons;