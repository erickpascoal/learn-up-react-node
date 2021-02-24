import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

interface CourseProps extends LinkProps {
  bordercolor: string;
}

export const Container = styled.div`
  width: 100%;
  padding-bottom: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  width: 90%;
  max-width: 980px;

  h2 {
    font-size: 2.6rem;
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const Course = styled(Link) <CourseProps>`
  background-color: #202024;
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
  border-left: 2px solid #8257e5;
  ${props => css`border-left-color: ${props.bordercolor}; `}; 


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
    margin-bottom: 15px;
    font-size: 3.6rem;
  }

  p{
    color: #87868B;
    font-size: 1.6rem;

  }

`;

export const LogoCourse = styled.div`
    padding: 10px;
    margin-bottom: 10px;

    position: relative;
    width: 150px;
    height: 150px;
    overflow: hidden;

   img {
    width: 100%;
    height: auto;
  }
`;