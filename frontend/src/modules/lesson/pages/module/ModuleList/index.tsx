import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import { Container, Content, Module, HeaderContent } from './styles';
import Button from '../../../../../components/Button';
import NoDataFound from '../../../../../components/NoDataFound';
import api from '../../../../../services/api';

interface PropsParam {
  moduleId: string;
}

const ModuleList: React.FC = () => {
  const [modules, setModules] = useState([]);
  const [module, setModule] = useState<any>(null);
  const { params } = useRouteMatch<PropsParam>();
  const history = useHistory();

  const loadActualModule = useCallback(async () => {
    const response = await api.get(`/courses/${params.moduleId}`);
    setModule(response.data);
  }, [params.moduleId]);

  const loadModules = useCallback(async () => {
    const response = await api.get(`/modules/course/${params.moduleId}`);
    setModules(response.data);
  }, [params.moduleId]);


  const goToBack = useCallback(async () => {
    window.history.back();
  }, []);

  const handleCreateModule = useCallback(() => {
    history.push(`/curso/${params.moduleId}/modulos/cadastro`);
  }, [history, params.moduleId]);

  const handleDeleteModule = useCallback(async (module: any) => {
    await api.delete(`/modules/${module.id}`);

    const index = modules.findIndex((m: any) => m.id === module.id);

    const modulesTemp = [...modules];

    modulesTemp.splice(index, 1);

    setModules(modulesTemp);

  }, [modules]);

  const ellipsis = useCallback((text: string) => {
    const limit = 150;
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  }, []);

  useEffect(() => {
    loadActualModule();
    loadModules();
  }, [loadActualModule, loadModules]);

  return (
    <Container>

      <HeaderContent>
        <h2>
          <a onClick={goToBack}>Cursos </a>
          <FaArrowRight size={14} />
          {module?.name}
        </h2>
        <Button buttonClass="primary" onClick={handleCreateModule}>Cadastrar</Button>
      </HeaderContent>

      <Content>
        {modules.length > 0 ?
          modules.map((module: any) => (
            <Module
              key={module.id}
              to={`/modulo/${module.id}/aulas`}
            // onContextMenuCapture={() => handleDeleteModule(module)}
            >
              <h2>{module.name}</h2>
              <p>{ellipsis(module.description)}</p>
            </Module>
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

export default ModuleList;