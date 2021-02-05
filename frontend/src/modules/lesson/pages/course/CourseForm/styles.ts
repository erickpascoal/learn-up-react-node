import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background-color: #202024;
  width: 600px;
  border-radius: 5px;
  padding: 50px 100px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  header {
    width: 100%;
    margin-bottom: 20px;

    display: flex;
    justify-content: flex-start;
  }

  div {
    margin-bottom: 8px;
  }

  footer {
    width: 100%;

    display: flex;
    justify-content: center;
    margin-top: 25px;
  }
`;

export const ConainerImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;

  svg {
    font-size: 50px;
    color: #464646;
  }

  button {
    padding: 5px;
    background-color: #121214;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #464646;
    cursor: pointer;
  }
`;

export const LogoCourse = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    position: relative;
    width: 150px;
    height: 150px;
    overflow: hidden;

   img {
    width: 100%;
    height: auto;
  }
`;