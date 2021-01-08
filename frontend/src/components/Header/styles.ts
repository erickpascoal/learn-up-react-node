import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px 100px;
  background-color: #202024;
  height: 60px;
  width: 100%;

  a {
    font-size: 35px;
  }

  button {
    display: flex;
    align-items: center;
    margin-left: 50px;
    cursor: pointer;
    font-size: 16;
    border: 0;
    background-color: #202024;
    color: #ffffff;

    svg {
      margin-right: 10px;
    }
  }

`;
