import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  background: none;
  padding: 0 30px;
  min-width: 300px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    width: 70%;
    img {
      width: 70px;
      height: 50px;
      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid #fff;
    }
    a {
      font-weight: bold;
      color: #999;
      font-size: 15px;
      margin-right: 20px;
      &:hover {
        color: ${lighten(0.3, '#999')};
      }
    }
  }
  @media (max-width: 768px) {
    nav {
      img {
        margin: 0;
        padding: 0;
        border: 0;
        margin-left: 56px;
        padding-left: 30px;
        border-left: 1px solid #ddd;
      }
    }
  }
`;
