import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  svg {
    margin: 0 10px 0 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Lesson = styled.a`
  background-color: #202024;
  margin: 8px;
  width: 100%;
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
  border-left: 2px solid #8257e5;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  transition: 0.2s ease 0s;

  :hover {
    transform: translate(10px);

    svg {
    color: #ffffff;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    h1 {
      color: #ffffff;
      margin-bottom: 15px
    }

    p{
      color: #87868B;
      font-size: 18px;
    }
  }

  svg {
    color: #87868B;
  }
`;
