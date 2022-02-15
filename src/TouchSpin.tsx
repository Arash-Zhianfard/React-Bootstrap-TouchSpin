import { useState, useRef, useEffect } from 'react';
import SideButtons from './SideButtons';
import VerticalButtons from './VerticalButtons';
import { Alignment, TouchSpinProps } from './Type';
const TouchSpin = ({
  signAlignment = Alignment.Left,
  sign,
  initValue = 0,
  step = 1,
  min = 0,
  max = 200000,
  decimals = 0,
  verticalButtons,
  verticalUpClass,
  verticalDownClass,
  parentStyle,
  inputStyle,
  counterHandler,
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
    } else {
      minThresholdRef.current = false;
      maxThresholdRef.current = false;
    }
  };
  useEffect(() => {
    isOutOfRange();
    counterHandler(counter);
  }, [counter]);
  const increase = () => {
    isOutOfRange();
    setCounter((prevCounter) => prevCounter + step);
  };
  const decrease = () => {
    isOutOfRange();
    setCounter((prevCounter) => prevCounter - step);
  };
  const increaseHandler = () => {
    if (!maxThresholdRef.current) increase();
    minThresholdRef.current = false;
    if (intervalRef.current || maxThresholdRef.current) return;
    intervalRef.current = setInterval(() => {
      increaseByInterval();
    }, interval);
  };
  const decreaseHandler = () => {
    if (!minThresholdRef.current) decrease();
    maxThresholdRef.current = false;
    if (intervalRef.current || minThresholdRef.current) return;
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
  const defaultParentStyle: React.CSSProperties = { width: 250, height: 30 };
  const defaultInputStyle: React.CSSProperties = {
    display: 'block',
    background: 'white',
    height: 'inherit',
    fontSize: '12px',
  };
  return verticalButtons ? (
    <VerticalButtons
      onIncreaseHandler={increaseHandler}
      OnDecreaseHandler={decreaseHandler}
      counter={counter}
      decimals={decimals}
      OnStopCounter={stopCounter}
      verticalDownClass={verticalDownClass}
      verticalUpClass={verticalUpClass}
      parentStyle={{ ...defaultParentStyle, ...parentStyle }}
      inputStyle={{ ...defaultInputStyle, ...inputStyle }}
    />
  ) : (
    <SideButtons
      onIncreaseHandler={increaseHandler}
      OnDecreaseHandler={decreaseHandler}
      counter={counter}
      decimals={decimals}
      signAlignment={signAlignment}
      sign={sign}
      OnStopCounter={stopCounter}
      parentStyle={{ ...defaultParentStyle, ...parentStyle }}
      inputStyle={{ ...defaultInputStyle, ...inputStyle }}
    />
  );
};
export default TouchSpin;
