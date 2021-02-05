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
  overflow-y: scroll;
  padding: 10px 200px; 
  width: 100%;
`;

export const ModalStyle = styled.div`
    padding: 10px;
    width: 100%; 
    border-radius: 5px;
    z-index: 2000;
    padding: 20px;
    background-color: #202024;

    display: flex;
    flex-direction: column;

    h1 {
      color: #ffff;
      margin-bottom: 15px;
    }

    p {
      padding-top: 10px;
      text-align: justify;
    }

    header {
      display: flex;
      justify-content: space-between;

      svg {
        cursor: pointer;
      }
    }
`;
