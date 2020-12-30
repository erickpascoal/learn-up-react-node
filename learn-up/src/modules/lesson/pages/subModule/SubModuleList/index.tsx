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
  const [module, setModule] = useState<any>(null);
  const { params } = useRouteMatch<PropsParam>();
  const history = useHistory();

  const loadSubModules = useCallback(async () => {
    const response = await api.get(`/submodules/module/${params.moduleId}`);
    setSubModules(response.data);
  }, [params.moduleId]);

  const loadActualModule = useCallback(async () => {
    const response = await api.get(`/modules/${params.moduleId}`);
    setModule(response.data);
  }, [params.moduleId]);

  const goToBack = useCallback(async () => {
    window.history.back();
  }, []);

  const handleCreateSubModule = useCallback(() => {
    history.push(`/curso/${params.moduleId}/modulos/cadastro`);
  }, [history, params.moduleId]);

  useEffect(() => {
    loadActualModule();
    loadSubModules();
  }, [loadActualModule, loadSubModules]);

  return (
    <Container>

      <HeaderContent>
        <h2>
          <a onClick={goToBack}>Cursos </a>
          <FaArrowRight size={14} />
          {module?.name}
        </h2>
        <Button buttonClass="primary" onClick={handleCreateSubModule}>Cadastrar</Button>
      </HeaderContent>

      <Content>
        {subModules.length > 0 ?
          subModules.map((subModule: any) => (
            <SubModule key={subModule.id} to={`/modulo/${subModule.id}/aulas`} >
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