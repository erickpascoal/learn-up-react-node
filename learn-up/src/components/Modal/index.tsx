import React from 'react';
import { FaTimes } from 'react-icons/fa'

import { ContainerModal, ModalStyle } from './styles';

interface ModalProps {
  closeModal: Function,
  title: string
}

const Modal: React.FC<ModalProps> = ({ children, closeModal, title }) => {
  return (
    <ContainerModal>


      <ModalStyle>
        <h1>{title}</h1>
        <FaTimes size={25} onClick={() => closeModal()} />
        {children}
      </ModalStyle>

    </ContainerModal>
  );
}

export default Modal;