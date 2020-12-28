import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Module } from './styles';

const ModuleList: React.FC = () => {
  const [modules, setModules] = useState([]);

  const loadModules = useCallback(async () => {
    const modules = await axios.get('http://localhost:8080/modules');
    setModules(modules.data);
  }, []);

  useEffect(() => {
    loadModules();
  }, [loadModules]);

  return (
    <Container>
      {modules.map((module: any) => (
        <Module key={module.id} to={`/submodule/${module.id}`} >
          <h1>{module.name}</h1>
          <p>{module.description}</p>
        </Module>
      ))}
    </Container>
  );
}

export default ModuleList;