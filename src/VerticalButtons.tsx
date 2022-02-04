import { ChildProps } from './Type';

const VerticalButtons = ({
  onIncreaseHandler,
  OnDecreaseHandler,
  OnStopCounter,
  counter,
  decimals,
  verticalUpClass,
  verticalDownClass,
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
  var upClass = verticalUpClass ? verticalUpClass : 'bi bi-caret-up-fill';
  var downClass = verticalDownClass
    ? verticalDownClass
    : 'bi bi-caret-down-fill';
  return (
    <div className={`input-group  bootstrap-touchspin`}>
      <span className="input-group-addon bootstrap-touchspin-prefix"></span>
      <input
        type="text"
        readOnly={true}
        value={counter.toFixed(decimals)}
        className="form-control "
        id="a"
      />
      <span className="input-group-addon bootstrap-touchspin-postfix"></span>
      <span className="input-group-btn-vertical">
        <span
          className="btn btn-outline-secondary bootstrap-touchspin-up"
          onMouseDown={increaseHandler}
          onMouseUp={stopCounter}
        >
          <span className={upClass} />
        </span>
        <span
          className="btn btn-outline-secondary bootstrap-touchspin-down"
          onMouseDown={decreaseHandler}
          onMouseUp={stopCounter}
        >
          <span className={downClass} />
        </span>
      </span>
    </div>
  );
};
export default VerticalButtons;
