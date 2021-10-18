import React, { useState, useRef, useEffect } from 'react';
import { Alignment, TouchSpinProps, BsSize } from './Type';
const TouchSpin = ({
  signAlignment = Alignment.Left,
  sign,
  initValue = 0,
  step = 1,
  min = 0,
  max = 10000,
  size = BsSize.Small,
  decimals = 0,
  counterHandler
}: TouchSpinProps) => {
  const [counter, setCounter] = useState(initValue);
  const intervalRef = useRef<null | any>(null);
  const maxThresholdRef = useRef<boolean>(false);
  const minThresholdRef = useRef<boolean>(false);
  var interval = 250;
  useEffect(() => {
    max = max - (max % step);
    min = Math.abs(min) - (Math.abs(min) % step);
    return () => stopCounter();
  }, []);
  const isOutOfRange = () => {
    if (counter === max) {
      stopCounter();
      maxThresholdRef.current = true;
    } else if (counter === min) {
      minThresholdRef.current = true;
      stopCounter();
    }
  };
  useEffect(() => {
    isOutOfRange();
    counterHandler(counter);
  }, [counter]);
  const increase = () => {
    setCounter((prevCounter) => prevCounter + step);
  };
  const decrease = () => {
    setCounter((prevCounter) => prevCounter - step);
  };
  const increaseHandler = () => {
    if (!maxThresholdRef.current) increase();
    minThresholdRef.current = false;
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      increaseByInterval();
    }, interval);
  };
  const decreaseHandler = () => {
    if (!minThresholdRef.current) decrease();
    maxThresholdRef.current = false;
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      decreaseByInterval();
    }, interval);
  };
  const decreaseByInterval = () => {
    stopCounter();
    if (interval > 50) interval = interval - 10;
    decrease();
    intervalRef.current = setInterval(() => {
      decreaseByInterval();
    }, interval);
  };
  const increaseByInterval = () => {
    stopCounter();
    if (interval > 50) interval = interval - 10;
    increase();
    intervalRef.current = setInterval(() => {
      increaseByInterval();
    }, interval);
  };
  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className={`input-group input-group-${size}`}>
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
export default TouchSpin;
