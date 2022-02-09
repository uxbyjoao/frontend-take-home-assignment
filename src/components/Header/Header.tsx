import * as S from './Header.styles';

import logo from 'assets/images/logo-origin.svg';

function Header(): JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.Header>
        <img src={logo} alt="Origin logo" />
      </S.Header>
    </S.HeaderWrapper>
  );
}

export default Header;
