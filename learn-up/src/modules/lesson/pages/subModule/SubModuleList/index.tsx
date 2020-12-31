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

  const handleDeleteSubModule = useCallback(async (subModule: any) => {
    await api.delete(`/submodules/${subModule.id}`);

    const index = subModules.findIndex((m: any) => m.id === subModule.id);

    const subModulesTemp = [...subModules];

    subModulesTemp.splice(index, 1);

    setSubModules(subModulesTemp);

  }, [subModules]);

  const ellipsis = useCallback((text: string) => {
    const limit = 150;
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  }, []);



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
            <SubModule
              key={subModule.id}
              to={`/modulo/${subModule.id}/aulas`}
            // onContextMenuCapture={() => handleDeleteSubModule(subModule)}
            >
              <h2>{subModule.name}</h2>
              <p>{ellipsis(subModule.description)}</p>
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