import { render, cleanup, screen } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  afterEach(cleanup);

  it('should render input', () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId('input');

    expect(input).toBeVisible();
  });
});
