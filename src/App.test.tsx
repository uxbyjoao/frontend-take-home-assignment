import { act, fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks/dom';

import { useSavingGoalCalculation } from 'hooks/useSavingGoalCalculation';
import { App } from './App';

const initialStoreState = useSavingGoalCalculation.getState();

describe('App', () => {
  // reset store before each test
  beforeEach(() => {
    useSavingGoalCalculation.setState(initialStoreState, true);
  });

  describe('DOM', () => {
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

    it('should not allow past months when left arrow pressed', () => {
      const { result } = renderHook(() => useSavingGoalCalculation());

      const { container } = render(<App />);

      const monthInput = container.querySelector('input[name="reachDate"]');
      if (!monthInput) {
        throw new Error('Could not find input with name "month"');
      }

      fireEvent.focus(monthInput);
      fireEvent.keyDown(monthInput, { key: 'ArrowLeft' });

      expect(result.current.reachDate.getTime()).toBeGreaterThanOrEqual(
        new Date().getTime()
      );
    });

    it('should show the correctly monthly amount', () => {
      const component = render(<App />);
      const { container } = component;

      const amountInput = container.querySelector('input[name="amount"]');
      const monthInput = container.querySelector('input[name="reachDate"]');
      const monthlyAmount = component.getByTestId('monthlyAmount');
      if (!amountInput) {
        throw new Error('Could not find input with name "month"');
      }

      if (!monthInput) {
        throw new Error('Could not find input with name "month"');
      }

      if (!monthlyAmount) {
        throw new Error('Could not find monthlyAmount text');
      }

      fireEvent.change(amountInput, { target: { value: '10000' } });

      fireEvent.focus(monthInput);
      fireEvent.keyDown(monthInput, { key: 'ArrowRight' });
      fireEvent.keyDown(monthInput, { key: 'ArrowRight' });
      fireEvent.keyDown(monthInput, { key: 'ArrowRight' });

      expect(monthlyAmount.textContent).toBe('$2,500.00');
    });

    it('returns the confirm button text', () => {
      const component = render(<App />);

      expect(component.getByTestId('confirmButton').innerHTML).toBe('Confirm');
    });
  });

  describe('zustand store', () => {
    it('should not allow past months by calling `decrementReachDate` function', () => {
      const { result } = renderHook(() => useSavingGoalCalculation());

      act(() => {
        result.current.decrementReachDate();
      });

      expect(result.current.reachDate.getTime()).toBeGreaterThanOrEqual(
        new Date().getTime()
      );
    });

    it('should increment months by calling `incrementReachDate` function', () => {
      const { result } = renderHook(() => useSavingGoalCalculation());

      act(() => {
        result.current.incrementReachDate();
        result.current.incrementReachDate();
      });

      expect(result.current.months).toBe(3);
    });

    it('should calculate the monthly amount correctly', () => {
      const { result } = renderHook(() => useSavingGoalCalculation());

      act(() => {
        result.current.setAmount('10000');
        result.current.incrementReachDate();
        result.current.incrementReachDate();
        result.current.incrementReachDate();
      });

      expect(result.current.monthlyAmount).toBe(2500);
    });
  });
});
