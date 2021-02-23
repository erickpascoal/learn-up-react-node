import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { tint } from 'polished'

export const Container = styled.div`
  width: 100%;
  padding-bottom: 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 90%;
  max-width: 980px;
  margin: 20px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    a {
      color: #8a96a3;
    }
  }

  svg {
    color: #8a96a3;
    margin: 0 10px 0 10px;
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    
    h2 {
      margin-top: 5px;
    }
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 980px;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
 `;

export const Module = styled(Link)`
  background-color: #202024;
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

  h2 {
    color: #ffffff;
    margin-bottom: 15px
  }

  p{
    color: #87868B;
  }

`;
