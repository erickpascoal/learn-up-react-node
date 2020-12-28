import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px 70px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Module = styled(Link)`
  background-color: #202024;
  margin: 10px;
  width: 25%;
  min-width: 300px;
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
  border-left: 2px solid #8257e5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 20px;
  transition: 0.2s ease 0s;

  :hover {
    transform: translatey(-10px);
  }

  h1 {
    color: #ffffff;
    margin-bottom: 15px
  }

  p{
    color: #87868B;
  }

`;
