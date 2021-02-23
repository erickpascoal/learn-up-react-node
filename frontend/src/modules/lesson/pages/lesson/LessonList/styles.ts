import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 90%;
  max-width: 980px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  h2 {
    a {
      color: #8a96a3;
    }
  }

  svg {
    color: #8a96a3;
    margin: 0 10px 0 10px;
  }

  @media(max-width: 500px) {
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
  grid-template-columns: 1fr;
`;

export const Lesson = styled.a`
  background-color: #202024;
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
  border-left: 2px solid #8257e5;
  padding: 20px;
  transition: 0.2s ease 0s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    transform: translate(10px);

    svg {
    color: #ffffff;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    h2 {
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
