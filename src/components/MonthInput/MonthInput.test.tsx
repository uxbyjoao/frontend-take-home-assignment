import { render, cleanup, screen } from '@testing-library/react';
import { getMonthLongName } from 'helpers/date';

import MonthInput from './MonthInput';

describe('MonthInput', () => {
  afterEach(cleanup);

  it('should render month input', () => {
    const now = new Date();

    const incrementMonth = () => now.setMonth(now.getMonth() + 1);
    const decrementMonth = () => now.setMonth(now.getMonth() - 1);

    render(
      <MonthInput
        data-testid="monthInput"
        date={now}
        incrementMonth={incrementMonth}
        decrementMonth={decrementMonth}
      />
    );

    const monthInput = screen.getByTestId('monthInput');

    expect(monthInput).toBeVisible();
    expect(monthInput).toContainElement(
      screen.getByText(getMonthLongName(now))
    );
    expect(monthInput).toContainElement(screen.getByText(now.getFullYear()));
  });
});
