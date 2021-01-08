import React, { useCallback, useEffect, useState } from 'react';
import { Container, Content, HeaderContent, Module } from './styles';
import Button from '../../../../../components/Button';
import NoDataFound from '../../../../../components/NoDataFound';
import { useHistory } from 'react-router-dom';
import api from '../../../../../services/api';

const ModuleList: React.FC = () => {
  const [modules, setModules] = useState([]);
  const history = useHistory();

  const loadModules = useCallback(async () => {
    const modules = await api.get('/courses');
    setModules(modules.data);
  }, []);


  const handleCreateModule = useCallback(() => {
    history.push('/curso/cadastro');
  }, [history]);

  const handleDeleteModule = useCallback(async (module: any) => {
    await api.delete(`/courses/${module.id}`);

    const index = modules.findIndex((m: any) => m.id === module.id);

    const modulesTemp = [...modules];

    modulesTemp.splice(index, 1);

    setModules(modulesTemp);

  }, [modules]);

  useEffect(() => {
    loadModules();
  }, [loadModules]);

  return (
    <Container>

      <HeaderContent>
        <h2>Escolha um curso para iniciar</h2>
        <Button buttonClass="primary" onClick={handleCreateModule}>Cadastrar</Button>
      </HeaderContent>

      <Content>
        {modules.length > 0 ?
          modules.map((module: any) => (
            <Module
              bordercolor={module.color}
              key={module.id}
              to={`/curso/${module.id}/modulos`}
            // onContextMenuCapture={() => handleDeleteModule(module)}
            >
              <h1>{module.name}</h1>
              <p>{module.description}</p>
            </Module>
          ))
          :
          <NoDataFound>
            <h3>Nenhuma curso foi cadastrado ainda.</h3>
          </NoDataFound>
        }
      </Content>

    </Container>
  );
}

export default ModuleList;