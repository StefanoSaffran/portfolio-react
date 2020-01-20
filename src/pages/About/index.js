import React from 'react';

import { FaGithub, FaFreeCodeCamp, FaLinkedin } from 'react-icons/fa';

import { Container, Content } from './styles';

export default function About() {
  return (
    <Container>
      <Content>
        <div className="about">
          <h1>
            About <span>Me</span>
          </h1>
          <p>
            Computer Engineer from Brazil, Currently focused on
            <strong> NodeJS</strong>,<strong> ReactJS </strong>and
            <strong> React Native</strong>. Constantly expanding my knowledge
            and trying to keep up with this ever-changing market.
          </p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/stefanosaffran/">
              <FaLinkedin size={30} color="rgb(0, 232, 104)" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/StefanoSaffran">
              <FaGithub size={30} color="rgb(0, 232, 104)" />
              <span>Github</span>
            </a>
            <a href="https://www.freecodecamp.org/stefanosaffran">
              <FaFreeCodeCamp size={30} color="rgb(0, 232, 104)" />
              <span>Freecodecamp</span>
            </a>
          </div>
        </div>
        <div className="img">
          <img
            src="https://res.cloudinary.com/stefanosaffran/image/upload/v1579521489/kgheqrikijkbbxcrybat.jpg"
            alt="Stefano Saffran"
          />
        </div>
      </Content>
    </Container>
  );
}
