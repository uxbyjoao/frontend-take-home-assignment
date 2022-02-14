import create, { SetState } from 'zustand';

import {
  formatNumberToLocaleString,
  sanitizeStringToNumber,
} from 'helpers/number';
import { subtractMonth, sumMonth, getMonthsFromNow } from 'helpers/date';

import * as T from './types';

const calculateMonthlyAmount = (amount: number, reachDate: Date): number => {
  const months = getMonthsFromNow(reachDate);

  return amount / months;
};

const setAmount = (
  amount: string,
  set: SetState<T.SavingGoalCalculationState>
) => {
  const numberAmount = sanitizeStringToNumber(amount);
  const stringAmount = formatNumberToLocaleString(numberAmount);

  set((state) => ({
    ...state,
    amount: stringAmount,
    monthlyAmount: calculateMonthlyAmount(numberAmount, state.reachDate),
  }));
};

const setReachDate = (
  reachDate: Date,
  set: SetState<T.SavingGoalCalculationState>
) => {
  const now = new Date();

  if (reachDate <= now) return;

  set((state) => ({
    ...state,
    reachDate,
    months: getMonthsFromNow(reachDate),
    monthlyAmount: calculateMonthlyAmount(
      sanitizeStringToNumber(state.amount),
      reachDate
    ),
  }));
};

const useSavingGoalCalculation = create<T.SavingGoalCalculationState>(
  (set) => ({
    amount: '0',
    reachDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    monthlyAmount: 0,
    months: 1,
    setAmount: (amount) => setAmount(amount, set),
    decrementReachDate: () =>
      set((state) => setReachDate(subtractMonth(state.reachDate, 1), set)),
    incrementReachDate: () =>
      set((state) => setReachDate(sumMonth(state.reachDate, 1), set)),
  })
);

export { useSavingGoalCalculation };
