// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
import * as ReactDOM from 'react-dom';
import TouchSpin from '../TouchSpin';
import '@testing-library/jest-dom/extend-expect';

describe('init test side button', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    const handler = jest.fn();
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<TouchSpin counterHandler={handler} />, container);
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
