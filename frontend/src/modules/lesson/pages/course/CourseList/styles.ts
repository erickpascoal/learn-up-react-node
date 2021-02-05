import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

interface CourseProps extends LinkProps {
  bordercolor: string;
}

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
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Course = styled(Link) <CourseProps>`
  background-color: #202024;
  margin: 10px;
  width: 25%;
  min-width: 300px;
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
    margin-bottom: 15px
  }

  p{
    color: #87868B;
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