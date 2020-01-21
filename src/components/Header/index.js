import React, { useState, useLayoutEffect } from 'react';
import LinkWrapper from '~/helpers/LinkWrapper';
import Menu from './Menu';

import { Container, Content } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
  const [width, setWidth] = useState([0]);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth([window.innerWidth]);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Container>
      <Content>
        {width < 769 ? (
          <nav>
            <Menu />
            <img src={logo} alt="logo" />
          </nav>
        ) : (
          <nav>
            <img src={logo} alt="logo" />
            <LinkWrapper to="/home">HOME</LinkWrapper>
            <LinkWrapper to="/about">ABOUT ME</LinkWrapper>
          </nav>
        )}
      </Content>
    </Container>
  );
}
