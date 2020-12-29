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

