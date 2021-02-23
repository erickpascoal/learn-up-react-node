import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202024;
  height: 60px;
  width: 100%;

  header {
    width: 90%;
    max-width: 980px;

    display: flex;
    justify-content: space-between;

    a {
    font-size: 3.5rem;
    }

    button {
      display: flex;
      align-items: center;
      margin-left: 50px;
      cursor: pointer;
      font-size: 1.6rem;
      border: 0;
      background-color: #202024;
      color: #ffffff;

      svg {
        margin-right: 10px;
      }
    }
  }
`;
