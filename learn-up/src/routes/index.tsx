
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header';
import LessonForm from '../modules/lesson/pages/lesson/LessonForm';
import LessonList from '../modules/lesson/pages/lesson/LessonList';
import ModuleForm from '../modules/lesson/pages/module/ModuleForm';
import ModuleList from '../modules/lesson/pages/module/ModuleList';
import SubModuleForm from '../modules/lesson/pages/subModule/SubModuleForm';
import SubModuleList from '../modules/lesson/pages/subModule/SubModuleList';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        <Route path="/" exact component={ModuleList} />
        <Route path="/curso/cadastrar" exact component={ModuleForm} />
        <Route path="/modulo/cadastrar" exact component={SubModuleForm} />
        <Route path="/aula/cadastrar" exact component={LessonForm} />
        <Route path="/submodule/:moduleId" exact component={SubModuleList} />
        <Route path="/lesson/:subModuleId" exact component={LessonList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;