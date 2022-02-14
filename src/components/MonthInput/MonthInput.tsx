import { Input, Typography } from 'components';
import { getMonthLongName } from 'helpers/date';

import * as S from './MonthInput.styles';
import * as T from './MonthInput.types';

function MonthInput(props: T.MonthInputProps): JSX.Element {
  const { date, name, incrementMonth, decrementMonth, ...rest } = props;

  const onKeyDown = (key: string): void => {
    switch (key) {
      case T.KeyEventEnum.ArrowLeft:
        decrementMonth();
        break;
      case T.KeyEventEnum.ArrowRight:
        incrementMonth();
        break;
      default:
        break;
    }
  };

  return (
    <S.MonthInputWrapper {...rest}>
      <Input readOnly name={name} onKeyDown={(e) => onKeyDown(e.key)} />

      <S.InputValueContainer>
        <Typography variant="paragraph" color="blueGray900">
          <b>{getMonthLongName(date)}</b>
        </Typography>

        <Typography variant="paragraph" color="blueGray400">
          {date.getFullYear()}
        </Typography>
      </S.InputValueContainer>

      <S.DecrementButton
        data-testid="decrementButton"
        onClick={decrementMonth}
      />
      <S.IncrementButton
        data-testid="incrementButton"
        onClick={incrementMonth}
      />
    </S.MonthInputWrapper>
  );
}

export default MonthInput;
