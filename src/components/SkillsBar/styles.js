import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 30px 0 0;

  h2 {
    font-size: 40px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 412px) {
    margin: 20px;

    h2 {
      font-size: 30px;
    }
  }
`;

export const SkillsList = styled.ul`
  padding: 50px 20px 0;
  background: #202020;
  border: 1px solid ${colors.primary};
  border-radius: 4px;

  @media (max-width: 359px) {
    margin-top: 20px;
  }
`;

export const Skill = styled.li`
  margin-bottom: 50px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      color: #fff;
      margin-left: 10px;
    }
  }
`;
