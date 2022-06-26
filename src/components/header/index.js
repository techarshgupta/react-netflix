import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Button, Background, Frame, Logo, ButtonLink } from './styles/header';

export default function Header({ bg = true, children, ...resetProps }) {
  return bg ? <Background {...resetProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...resetProps }) {
  return <Frame {...resetProps}>{children}</Frame>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...resetProps }) {
  return <ButtonLink {...resetProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to = '/', ...resetProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...resetProps} />
    </ReactRouterLink>
  );
};

Header.Button = function HeaderButton({ to = '/', children, ...resetProps }) {
  return (
    <ReactRouterLink to={to}>
      <Button {...resetProps}>{children}</Button>;
    </ReactRouterLink>
  );
};
