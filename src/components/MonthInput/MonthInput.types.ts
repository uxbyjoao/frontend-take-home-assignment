export enum KeyEventEnum {
  ArrowRight = 'ArrowRight',
  ArrowLeft = 'ArrowLeft',
}

export type MonthInputProps = {
  date: Date;
  name?: string;
  incrementMonth: () => void;
  decrementMonth: () => void;
};
