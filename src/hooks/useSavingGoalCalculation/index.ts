import create, { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';

import {
  formatNumberToLocaleString,
  sanitizeStringToNumber,
} from 'helpers/number';
import { subtractMonth, sumMonth } from 'helpers/date';

import * as T from './types';

const calculateMonthlyAmount = (amount: number, reachDate: Date): number => {
  const now = new Date();
  const months =
    (reachDate.getFullYear() - now.getFullYear()) * 12 +
    reachDate.getMonth() -
    now.getMonth();

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
    monthlyAmount: calculateMonthlyAmount(
      sanitizeStringToNumber(state.amount),
      reachDate
    ),
  }));
};

const useSavingGoalCalculation = create<T.SavingGoalCalculationState>(
  devtools((set) => ({
    amount: '0',
    reachDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    monthlyAmount: 0,
    setAmount: (amount) => setAmount(amount, set),
    decrementReachDate: () =>
      set((state) => setReachDate(subtractMonth(state.reachDate, 1), set)),
    incrementReachDate: () =>
      set((state) => setReachDate(sumMonth(state.reachDate, 1), set)),
  }))
);

export { useSavingGoalCalculation };
