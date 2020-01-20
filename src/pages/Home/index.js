import React from 'react';

import logo from '~/assets/logo.png'
import { Container, Content } from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <h1>Stefano Saffran</h1>
        <h2>FullStack Developer</h2>
        <ul>
          <li>Node.js</li>
          <li>ReactJS</li>
          <li>React Native</li>
        </ul>
      </Content>
    </Container>
  );
}
