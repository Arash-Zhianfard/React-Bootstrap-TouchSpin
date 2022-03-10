// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
import * as ReactDOM from 'react-dom';
import TouchSpin from '../TouchSpin';

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
    expect(inputs[0].name).toBe('decreaseSide');
    expect(inputs[1].name).toBe('counterInput');
    expect(inputs[2].name).toBe('increaseSide');
  });
});
