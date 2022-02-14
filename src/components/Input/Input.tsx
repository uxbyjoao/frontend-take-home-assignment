import * as S from './Input.styles';
import * as T from './Input.types';

function Input(props: T.InputProps): JSX.Element {
  const { icon, ...rest } = props;

  return <S.Input icon={icon} {...rest} />;
}

export default Input;
