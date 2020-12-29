import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

import { Container, Content, SubModule, HeaderContent } from './styles';
import Button from '../../../../../components/Button';
import { FaArrowRight } from 'react-icons/fa';

interface PropsParam {
  moduleId: string;
}

const SubModuleList: React.FC = () => {
  const [subModules, setSubModules] = useState([]);
  const { params } = useRouteMatch<PropsParam>();
  const [moduleId, setModuleId] = useState<string | null>('');
  const [moduleName, setModuleName] = useState<string | null>('');

  const loadSubModules = useCallback(async () => {
    const response = await axios.get(`http://localhost:8080/submodules/module/${params.moduleId}`);
    setSubModules(response.data);
  }, [params.moduleId]);

  const getModuleStorage = useCallback(async () => {
    const moduleId = sessionStorage.getItem('@LearnUp:moduleId');
    const moduleName = sessionStorage.getItem('@LearnUp:moduleName');
    setModuleId(moduleId);
    setModuleName(moduleName);
  }, []);

  const setSubModuleStorage = useCallback((subModule: any) => {
    sessionStorage.setItem('@LearnUp:subModuleId', subModule.id);
    sessionStorage.setItem('@LearnUp:subModuleName', subModule.name);
  }, []);

  const goToBack = useCallback(async () => {
    window.history.back();
  }, []);

  useEffect(() => {
    loadSubModules();
    getModuleStorage();
  }, [getModuleStorage, loadSubModules]);

  return (
    <Container>

      <HeaderContent>
        <h1>
          <a onClick={goToBack}>Cursos </a>
          <FaArrowRight size={14} />
          {moduleName}
        </h1>
        <Button buttonClass="primary">Cadastrar</Button>
      </HeaderContent>

      <Content>
        {subModules.map((subModule: any) => (
          <SubModule key={subModule.id} onClick={() => setSubModuleStorage(subModule)} to={`/lesson/${subModule.id}`} >
            <h1>{subModule.name}</h1>
            <p>{subModule.description}</p>
          </SubModule>
        ))}
      </Content>

    </Container>
  );
}

export default SubModuleList;