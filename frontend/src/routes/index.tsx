
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header';
import CourseForm from '../modules/lesson/pages/course/CourseForm';
import CourseList from '../modules/lesson/pages/course/CourseList';
import LessonForm from '../modules/lesson/pages/lesson/LessonForm';
import LessonList from '../modules/lesson/pages/lesson/LessonList';
import ModuleForm from '../modules/lesson/pages/module/ModuleForm';
import ModuleList from '../modules/lesson/pages/module/ModuleList';


// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        <Route path="/" exact component={CourseList} />
        <Route path="/curso/cadastro" exact component={CourseForm} />
        <Route path="/curso/:moduleId/modulos" exact component={ModuleList} />
        <Route path="/curso/:moduleId/modulos/cadastro" exact component={ModuleForm} />
        <Route path="/modulo/:subModuleId/aulas" exact component={LessonList} />
        <Route path="/modulo/:subModuleId/aulas/cadastro" exact component={LessonForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;