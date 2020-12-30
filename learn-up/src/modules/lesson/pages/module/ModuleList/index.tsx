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
    const modules = await api.get('/modules');
    setModules(modules.data);
  }, []);

  useEffect(() => {
    loadModules();
  }, [loadModules]);

  const handleCreateModule = useCallback(() => {
    history.push('/curso/cadastro');
  }, []);

  return (
    <Container>

      <HeaderContent>
        <h2>Escolha um curso para iniciar</h2>
        <Button buttonClass="primary" onClick={handleCreateModule}>Cadastrar</Button>
      </HeaderContent>

      <Content>
        {modules.length > 0 ?
          modules.map((module: any) => (
            <Module key={module.id} to={`/curso/${module.id}/modulos`} >
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