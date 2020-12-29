import React from 'react';

import { Container, Image } from './styles';
import imageNoData from '../../assets/images/no-data.png'


const NoDataFound: React.FC = ({ children }) => {

  return (
    <Container>
      {children ? children : <h3>Nenhum registro encontrado.</h3>}

      <img src={imageNoData} alt="Nenhum registro encontrado." />
    </Container>
  );
}

export default NoDataFound;