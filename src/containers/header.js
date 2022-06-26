import React from 'react';
import { Header } from '../components';
import { HOME, SIGN_IN } from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ children, ...restProps }) {
  return (
    <Header {...restProps}>
      <Header.Frame {...restProps}>
        <Header.Logo to={HOME} src={logo} alt="Netflix" {...restProps} />
        <Header.ButtonLink to={SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
