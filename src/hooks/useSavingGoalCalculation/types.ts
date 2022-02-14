export type SavingGoalCalculationState = {
  amount: string;
  reachDate: Date;
  monthlyAmount: number;
  months: number;
  setAmount: (amount: string) => void;
  incrementReachDate: () => void;
  decrementReachDate: () => void;
};
