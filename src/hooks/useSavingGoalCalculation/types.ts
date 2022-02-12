export type SavingGoalCalculationState = {
  amount: string;
  reachDate: Date;
  monthlyAmount: number;
  setAmount: (amount: string) => void;
  setReachDate: (reachDate: Date) => void;
};
