import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
`;

export const Content = styled.section`
  margin-bottom: 150px;
  min-width: 400px;
  text-align: center;
  position: relative;

  img {
    height: 150px;
    margin-bottom: 50px;
  }

  h1 {
    font-family: 'Dancing Script', cursive;
    font-size: 64px;
    font-weight: 700;
    color: ${colors.primary};

    position: absolute;
    top: 110px;
    right: 10px;
  }
  h2 {
    color: ${colors.white};
    font-size: 30px;
  }

  ul {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    li {
      line-height: 32px;
      font-weight: bold;
    }

    li:nth-child(1) {
      color: ${colors.node};
    }

    li:nth-child(2) {
      color: ${colors.react};
      margin: 0 10px;
    }

    li:nth-child(3) {
      color: ${colors.reactNative};
    }
  }
`;
