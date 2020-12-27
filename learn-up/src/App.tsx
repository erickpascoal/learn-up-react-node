import React from 'react';
import GlobalStyle from './styles/Global'
import ModuleList from './modules/lesson/pages/module/ModuleList';
import Routes from './routes';

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