import React from 'react';
import GlobalStyle from './styles/Global'
import Routes from './routes';
import Header from './components/Header';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;