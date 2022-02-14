import { Typography } from 'components';

import * as S from './Card.styles';
import * as T from './Card.types';

function Card(props: T.CardProps): JSX.Element {
  const { children, ...rest } = props;

  return <S.Card {...rest}>{children}</S.Card>;
}

function CardHeader(props: T.CardHeaderProps): JSX.Element {
  const { icon, title, subtitle } = props;

  return (
    <S.CardHeader>
      <img src={icon} alt={title} />
      <Typography variant="headingSmall" color="blueGray900">
        {title}
      </Typography>

      {subtitle && (
        <Typography variant="paragraph" color="blueGray400">
          {subtitle}
        </Typography>
      )}
    </S.CardHeader>
  );
}

function CardBody(props: T.CardBodyProps): JSX.Element {
  const { children } = props;

  return <S.CardBody>{children}</S.CardBody>;
}

function CardFooter(props: T.CardFooterProps): JSX.Element {
  const { children } = props;

  return <S.CardFooter>{children}</S.CardFooter>;
}

const CardComponent = { Card, CardHeader, CardBody, CardFooter };

export default CardComponent;
