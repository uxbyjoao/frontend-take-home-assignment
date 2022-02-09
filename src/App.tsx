import { Header } from 'components';

import * as S from './styles';

function App(): JSX.Element {
  return (
    <S.App data-testid="greetings-container">
      <Header />
    </S.App>
  );
}

export { App };
