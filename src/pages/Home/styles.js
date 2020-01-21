import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
  width: 100%;
`;

export const Content = styled.section`
  margin-bottom: 130px;
  width: 100%;
  max-width: 400px;
  text-align: center;

  img {
    height: 100px;
  }

  h1 {
    font-family: 'Dancing Script', cursive;
    font-size: 45px;
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: 10px;
  }

  h2 {
    color: ${colors.white};
    font-size: 25px;
  }

  ul {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    li {
      line-height: 32px;
      font-size: 14px;
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

  @media (min-width: 410px) {
    position: relative;

    img {
      height: 120px;
      margin-bottom: 40px;
    }

    h1 {
      font-size: 50px;

      position: absolute;
      top: 90px;
      right: 50px;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 150px;

    img {
      height: 150px;
      margin-bottom: 50px;
    }

    h1 {
      font-size: 64px;

      top: 110px;
      right: 10px;
    }

    h2 {
      font-size: 30px;
    }

    li {
      font-size: 17px !important;
    }
  }
`;
