import { VerticalProps } from './Type';

const VerticalButtons = ({
  onIncreaseHandler,
  onDecreaseHandler,
  onStopCounter,
  counter,
  decimals,
  verticalUpClass,
  verticalDownClass,
  parentStyle,
  inputStyle,
  iconSize = 11,
}: VerticalProps) => {
  const increaseHandler = () => {
    onIncreaseHandler();
  };
  const decreaseHandler = () => {
    onDecreaseHandler();
  };
  const stopCounter = () => {
    onStopCounter();
  };
  var upClass = verticalUpClass ? verticalUpClass : 'bi bi-caret-up-fill';
  var downClass = verticalDownClass
    ? verticalDownClass
    : 'bi bi-caret-down-fill';
  var iconFontSize: React.CSSProperties = {
    fontSize: iconSize,
  };
  return (
    <div style={parentStyle} className={`input-group  bootstrap-touchspin`}>
      <span className="input-group-addon bootstrap-touchspin-prefix"></span>
      <input
        type="text"
        readOnly={true}
        value={counter.toFixed(decimals)}
        className="form-control"
        style={inputStyle}
      />
      <span className="input-group-addon bootstrap-touchspin-postfix"></span>
      <span className="input-group-btn-vertical">
        <span
          className="btn btn-outline-secondary bootstrap-touchspin-up"
          onMouseDown={increaseHandler}
          onMouseUp={stopCounter}
        >
          <span className={upClass} style={iconFontSize} />
        </span>
        <span
          className="btn btn-outline-secondary bootstrap-touchspin-down"
          onMouseDown={decreaseHandler}
          onMouseUp={stopCounter}
        >
          <span className={downClass} style={iconFontSize}/>
        </span>
      </span>
    </div>
  );
};
export default VerticalButtons;
