import create, { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';

import {
  formatNumberToLocaleString,
  sanitizeStringToNumber,
} from 'helpers/number';

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
  set((state) => ({
    ...state,
    reachDate,
  }));
};

const useSavingGoalCalculation = create<T.SavingGoalCalculationState>(
  devtools((set) => ({
    amount: '0',
    reachDate: new Date(),
    monthlyAmount: 0,
    setAmount: (amount) => setAmount(amount, set),
    setReachDate: (reachDate: Date) => setReachDate(reachDate, set),
  }))
);

export { useSavingGoalCalculation };
