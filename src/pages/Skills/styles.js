import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);

  @media (max-width: 411px) {
    margin-top: 150px;
  }
`;
