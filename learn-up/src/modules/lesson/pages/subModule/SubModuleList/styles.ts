import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { tint } from 'polished'

export const Container = styled.div`
  padding: 30px 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h2 {
    a {
      color: #8a96a3;
    }
  }

  svg {
    color: #8a96a3;
    margin: 0 10px 0 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
 `;

export const SubModule = styled(Link)`
  background-color: #202024;
  margin: 10px;
  width: 10%;
  min-width: 200px;
  min-height: 300px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid #202024;

  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
  transition: 0.2s ease 0s;

  :hover {
    background-color: ${tint(0.03, '#202024')};
    border: 2px solid #8257e5;
  }

  h1 {
    color: #ffffff;
    margin-bottom: 15px
  }

  p{
    color: #87868B;
  }

`;
