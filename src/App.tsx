import { Card, Header, Input, MonthInput, Typography } from 'components';

import { useSavingGoalCalculation } from 'hooks/useSavingGoalCalculation';
import { SavingGoalCalculationState } from 'hooks/useSavingGoalCalculation/types';

import buyHouse from 'assets/icons/buy-a-house.svg';
import * as S from './App.styles';
import shallow from 'zustand/shallow';
import { currency, sanitizeStringToNumber } from 'helpers/number';
import { getMonthLongName } from 'helpers/date';

const useSavingGoalCalculationSelector = (
  state: SavingGoalCalculationState
) => ({
  amount: state.amount,
  reachDate: state.reachDate,
  monthlyAmount: state.monthlyAmount,
  months: state.months,
  incrementReachDate: state.incrementReachDate,
  decrementReachDate: state.decrementReachDate,
  setAmount: state.setAmount,
});

function App(): JSX.Element {
  const {
    amount,
    reachDate,
    monthlyAmount,
    months,
    incrementReachDate,
    decrementReachDate,
    setAmount,
  } = useSavingGoalCalculation(useSavingGoalCalculationSelector, shallow);

  const renderDetails = () => {
    const goal = currency(sanitizeStringToNumber(amount));
    const monthLongName = getMonthLongName(reachDate);
    const fullYear = reachDate.getFullYear();

    return (
      <Typography variant="caption" color="blueGray900" align="center">
        You&apos;re planning<b> {months} monthly deposits </b>
        to reach your
        <b> {goal} </b>
        goal by
        <b>
          &nbsp;
          {monthLongName}
          &nbsp;
          {fullYear}.
        </b>
      </Typography>
    );
  };

  return (
    <S.App>
      <Header />

      <S.Title>
        <Typography variant="subtitle" color="brandColorPrimary" align="center">
          Let&apos;s plan your <b>saving goal.</b>
        </Typography>
      </S.Title>

      <Card.Card>
        <Card.CardHeader
          icon={buyHouse}
          title="Buy a house"
          subtitle="Saving goal"
        />

        <Card.CardBody>
          <S.CalculationFields>
            <label>
              <Typography variant="description" color="blueGray900">
                Total amount
              </Typography>
              <Input
                name="amount"
                icon="dollar"
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.currentTarget.value)}
              />
            </label>

            <label>
              <Typography variant="description" color="blueGray900">
                Reach goal by
              </Typography>

              <MonthInput
                name="reachDate"
                date={reachDate}
                decrementMonth={decrementReachDate}
                incrementMonth={incrementReachDate}
                data-testid="reachDate"
              />
            </label>
          </S.CalculationFields>

          <S.CalculationDetails>
            <div>
              <Typography variant="subtitle" color="blueGray900">
                Monthly amount
              </Typography>

              <Typography
                variant="headingMedium"
                color="brandColorSecondary"
                data-testid="monthlyAmount"
              >
                {currency(monthlyAmount)}
              </Typography>
            </div>

            <div>{renderDetails()}</div>
          </S.CalculationDetails>
        </Card.CardBody>

        <Card.CardFooter>
          <S.ConfirmButton data-testid="confirmButton">Confirm</S.ConfirmButton>
        </Card.CardFooter>
      </Card.Card>
    </S.App>
  );
}

export { App };
