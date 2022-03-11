// import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';
import * as ReactDOM from 'react-dom';
import TouchSpin from '../TouchSpin';
import '@testing-library/jest-dom/extend-expect';

describe('init test vertical button', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    const handler = jest.fn();
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(
      <TouchSpin counterHandler={handler} verticalButtons={true} />,
      container,
    );
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });
  test('renders all elements correctly', () => {
    expect(
      container.querySelector('[data-test="decrease"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-test="counterInput"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-test="increase"]'),
    ).toBeInTheDocument();
  });
});
describe('vertical buttons event', () => {
  let container: HTMLDivElement;
  const handler = jest.fn();
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(
      <TouchSpin counterHandler={handler} min={10} verticalButtons={true} />,
      container,
    );
  });
  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
    jest.clearAllMocks();
  });
  test('increase event ', () => {
    var increase = container.querySelector('[data-test="increase"]');
    fireEvent.click(increase!);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  test('decrease event ', () => {
    var decrease = container.querySelector('[data-test="decrease"]');
    fireEvent.click(decrease!);
    expect(handler).toHaveBeenCalledTimes(1);
  });
  test('min value', () => {
    var decrease = container.querySelector('[data-test="decrease"]');
    fireEvent.change(decrease!, { target: { value: '9' } });
    var v=container.querySelector('[data-test="counterInput"]');
    
    for (var i = 0; i < 10; i++) {
      fireEvent.click(decrease!);      
    }
    expect(v!).to('10');
    expect(handler).toHaveBeenCalledTimes(10);
  });
});
