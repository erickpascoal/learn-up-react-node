import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgb(18, 18, 20, 0.8);
  -webkit-transition: all 0.5s 0.5s ease-in-out;
  transition: all 0.5s 0.5s ease-in-out;

  svg {
    position: absolute;
    top: 15px;
    right: 30px;
    cursor: pointer;
  }
`;

export const ModalStyle = styled.div`
    padding: 10px;
    max-width: 90%;
    max-height: 85%;
    position: absolute;
    top: 5%;
    left: 50%;
    z-index: 2000;
    border-radius: 3px;
    padding: 20px;
    background-color: #202024;
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;

    h1 {
      color: #ffff;
      margin-bottom: 10px;
    }

    p {
      padding-top: 10px;
      text-align: justify;
    }
`;
