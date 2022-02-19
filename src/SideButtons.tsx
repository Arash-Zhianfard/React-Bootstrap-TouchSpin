import { Alignment, SideProps } from "./Type";
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
}: SideProps) => {
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
      <input
          type="button"
          onMouseDown={decreaseHandler}
          onMouseUp={stopCounter}
          className="btn-right"
          value="-"
        />
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
      <input
          type="button"
          onMouseDown={increaseHandler}
          onMouseUp={stopCounter}
          className="btn-right"
          value="+"
        />
      </div>
    </div>
  );
};
export default SideButtons;
