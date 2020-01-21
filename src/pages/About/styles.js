import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1040px;
  z-index: 2;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin: 100px auto 0px;
  overflow: initial;

  div.about {
    max-width: 490px;
    padding: 20px;

    h1 {
      font-size: 64px;
      font-weight: 700;
      color: ${colors.white};
      margin-bottom: 50px;

      span {
        color: ${colors.primary};
      }
    }
    p {
      font-size: 17px;
      line-height: 32px;
      font-weight: 500;
      color: rgb(170, 170, 170);
    }

    strong:nth-child(1) {
      color: ${colors.node};
    }

    strong:nth-child(2) {
      color: ${colors.react};
    }

    strong:nth-child(3) {
      color: ${colors.reactNative};
    }

    div.social-media {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 70px;
      grid-row-gap: 20px;

      a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        span {
          color: rgb(170, 170, 170);
          font-size: 17px;
          font-weight: bold;
          margin-left: 10px;
        }

        &:hover {
        }
      }
    }
  }

  div.img {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(255, 255, 255);

    img {
      border-radius: 5px;
      width: 100%;
      max-width: 350px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 20px;
    margin: 100px auto 0px;
    div.about {
    }

    div.img {
      img {
      }
    }
  }

  @media (max-width: 768px) {
    div.about {
      order: 2;
      h1 {
        display: none;
      }
    }

    div.img {
      order: 1;
    }

    div.img::before {
      content: 'About me';
      text-align: center;
      font-size: 30px;
      line-height: 40px;
      font-weight: bold;
      margin-bottom: 50px;
      width: 100%;
    }
  }
`;
