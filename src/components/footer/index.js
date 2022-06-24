import React from 'react';
import { Break, Column, Container, Link, Row, Text, Title } from './styles/footer';

export default function Footer({ children, ...resetProps }) {
  return <Container {...resetProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...resetProps }) {
  return <Row {...resetProps}>{children}</Row>;
};
Footer.Column = function FooterColumn({ children, ...resetProps }) {
  return <Column {...resetProps}>{children}</Column>;
};
Footer.Link = function FooterLink({ children, ...resetProps }) {
  return <Link {...resetProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...resetProps }) {
  return <Title {...resetProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...resetProps }) {
  return <Text {...resetProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...resetProps }) {
  return <Break {...resetProps}>{children}</Break>;
};
