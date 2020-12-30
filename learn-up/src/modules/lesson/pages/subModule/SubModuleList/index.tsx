import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import { Container, Content, SubModule, HeaderContent } from './styles';
import Button from '../../../../../components/Button';
import NoDataFound from '../../../../../components/NoDataFound';
import api from '../../../../../services/api';


interface PropsParam {
  moduleId: string;
}

const SubModuleList: React.FC = () => {
  const [subModules, setSubModules] = useState([]);
  const { params } = useRouteMatch<PropsParam>();
  const [moduleId, setModuleId] = useState<string | null>('');
  const [moduleName, setModuleName] = useState<string | null>('');
  const history = useHistory();

  const loadSubModules = useCallback(async () => {
    const response = await api.get(`/submodules/module/${params.moduleId}`);
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

  const handleCreateSubModule = useCallback(() => {
    history.push('/modulo/cadastrar');
  }, []);

  useEffect(() => {
    loadSubModules();
    getModuleStorage();
  }, [getModuleStorage, loadSubModules]);

  return (
    <Container>

      <HeaderContent>
        <h2>
          <a onClick={goToBack}>Cursos </a>
          <FaArrowRight size={14} />
          {moduleName}
        </h2>
        <Button buttonClass="primary" onClick={handleCreateSubModule}>Cadastrar</Button>
      </HeaderContent>

      <Content>
        {subModules.length > 0 ?
          subModules.map((subModule: any) => (
            <SubModule key={subModule.id} onClick={() => setSubModuleStorage(subModule)} to={`/lesson/${subModule.id}`} >
              <h1>{subModule.name}</h1>
              <p>{subModule.description}</p>
            </SubModule>
          ))
          :
          <NoDataFound>
            <h3>Nenhum módulo foi cadastrado para este curso ainda.</h3>
          </NoDataFound>
        }
      </Content>

    </Container>
  );
}

export default SubModuleList;