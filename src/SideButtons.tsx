import { Alignment, ChildProps } from "./Type";
const SideButtons = ({
  onIncreaseHandler,
  OnDecreaseHandler,
  OnStopCounter,
  signAlignment,
  sign,
  counter,
  decimals,
  parentStyle,
  inputStyle,
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
    <div className={`input-group`} style={parentStyle}>
      <div className="input-group-prepend">
        <button
          onMouseDown={decreaseHandler}
          onMouseUp={stopCounter}
          className="btn-left"
        >
          -
        </button>
        {sign && signAlignment === Alignment.Left && (
          <span className="input-group-text">{sign}</span>
        )}
      </div>
      <input
        type="text"
        className="form-control "
        value={counter.toFixed(decimals)}
        readOnly
        style={inputStyle}
      />
      <div className="input-group-append">
        {sign && signAlignment === Alignment.Right && (
          <span className="input-group-text">{sign}</span>
        )}
        <button
          onMouseDown={increaseHandler}
          onMouseUp={stopCounter}
          className="btn-right"
        >
          +
        </button>
      </div>
    </div>
  );
};
export default SideButtons;
