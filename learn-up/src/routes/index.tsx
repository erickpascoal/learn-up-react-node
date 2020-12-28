
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header';
import LessonList from '../modules/lesson/pages/lesson/LessonList';
import ModuleList from '../modules/lesson/pages/module/ModuleList';
import SubModuleList from '../modules/lesson/pages/subModule/SubModuleList';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        <Route path="/" exact component={ModuleList} />
        <Route path="/submodule/:moduleId" exact component={SubModuleList} />
        <Route path="/lesson/:subModuleId" exact component={LessonList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;