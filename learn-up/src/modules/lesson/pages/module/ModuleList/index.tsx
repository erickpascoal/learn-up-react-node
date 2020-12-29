import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Content, HeaderContent, Module } from './styles';
import Button from '../../../../../components/Button';

const ModuleList: React.FC = () => {
  const [modules, setModules] = useState([]);

  const loadModules = useCallback(async () => {
    const modules = await axios.get('http://localhost:8080/modules');
    setModules(modules.data);
  }, []);

  useEffect(() => {
    loadModules();
  }, [loadModules]);

  const setModuleStorage = useCallback((module: any) => {
    sessionStorage.setItem('@LearnUp:moduleId', module.id);
    sessionStorage.setItem('@LearnUp:moduleName', module.name);
  }, []);

  return (
    <Container>

      <HeaderContent>
        <h1>Escolha um curso para iniciar</h1>
        <Button buttonClass="primary">Cadastrar</Button>
      </HeaderContent>

      <Content>
        {modules.map((module: any) => (
          <Module key={module.id} onClick={() => setModuleStorage(module)} to={`/submodule/${module.id}`} >
            <h1>{module.name}</h1>
            <p>{module.description}</p>
          </Module>
        ))}
      </Content>

    </Container>
  );
}

export default ModuleList;