import { App } from './App';
import { fireEvent, render } from '@testing-library/react';

describe('App', () => {
  describe('using testing library', () => {
    it('should not allow letters on input', () => {
      const { container } = render(<App />);

      const amountInput = container.querySelector('input[name="amount"]');

      if (!amountInput) {
        throw new Error('Could not find input with name "amount"');
      }

      fireEvent.change(amountInput, { target: { value: 'abc' } });
      expect(amountInput.value).toBe('0');
    });

    it('should render formatted value on input', () => {
      const component = render(<App />);
      const { container } = component;

      const amountInput = container.querySelector('input[name="amount"]');
      const monthlyAmount = component.getByTestId('monthlyAmount');

      if (!amountInput) {
        throw new Error('Could not find amount input');
      }

      if (!monthlyAmount) {
        throw new Error('Could not find monthlyAmount text');
      }

      fireEvent.change(amountInput, { target: { value: '10000' } });
      expect(amountInput.value).toBe('10,000');
      expect(monthlyAmount.textContent).toBe('$10,000.00');
    });

    it('returns the confirm button text', () => {
      const component = render(<App />);

      expect(component.getByTestId('confirm-button').innerHTML).toBe('Confirm');
    });
  });
});
