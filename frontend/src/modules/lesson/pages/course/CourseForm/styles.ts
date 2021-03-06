import styled from 'styled-components';

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
  max-width: 600px;
`;

export const Form = styled.form`
  background-color: #202024;
  border-radius: 5px;
  padding: 40px 15%;

  display: flex;
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
    margin-top: 25px;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: 150px 150px;
    justify-content: center;


    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
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