import { Card, Header, Typography } from 'components';
import buyHouse from 'assets/icons/buy-a-house.svg';

import * as S from './App.styles';

function App(): JSX.Element {
  return (
    <S.App data-testid="greetings-container">
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
              <input type="number" />
            </label>

            <label>
              <Typography variant="description" color="blueGray900">
                Reach goal by
              </Typography>

              <input />
            </label>
          </S.CalculationFields>

          <S.CalculationDetails>
            <div>
              <Typography variant="subtitle" color="blueGray900">
                Monthly amount
              </Typography>
              <Typography variant="headingMedium" color="brandColorSecondary">
                $520.83
              </Typography>
            </div>
            <div>
              <Typography variant="caption" color="blueGray900" align="center">
                You&apos;re planning<b>&nbsp;48 monthly deposits&nbsp;</b>to
                reach your
                <b>&nbsp;$25,000&nbsp;</b>goal by<b>&nbsp;October 2020.</b>
              </Typography>
            </div>
          </S.CalculationDetails>
        </Card.CardBody>

        <Card.CardFooter>
          <S.ConfirmButton>Confirm</S.ConfirmButton>
        </Card.CardFooter>
      </Card.Card>
    </S.App>
  );
}

export { App };
