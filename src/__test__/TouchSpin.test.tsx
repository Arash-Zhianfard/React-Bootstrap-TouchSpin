// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
import * as ReactDOM from 'react-dom';
import TouchSpin from '../TouchSpin';
import '@testing-library/jest-dom/extend-expect';

describe('init test', () => {
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
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(3);
    expect(
      container.querySelector('[data-test="decreaseSide"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-test="counterInput"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-test="increaseSide"]'),
    ).toBeInTheDocument();
  });
});
