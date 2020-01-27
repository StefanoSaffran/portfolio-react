import React from 'react';

import logo from '~/assets/logo.png';
import { Container, Content } from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <div className="img-container">
          <img src={logo} alt="logo" />
        </div>
        <h1>Stefano Saffran</h1>
        <h2>Fullstack Developer</h2>
        <ul>
          <li>NodeJS</li>
          <li>ReactJS</li>
          <li>React Native</li>
        </ul>
      </Content>
    </Container>
  );
}
