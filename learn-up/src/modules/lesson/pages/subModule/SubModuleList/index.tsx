import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

import { Container, ContainerSubModule, SubModule } from './styles';

interface PropsParam {
  moduleId: string;
}

const SubModuleList: React.FC = () => {
  const [subModules, setSubModules] = useState([]);
  const { params } = useRouteMatch<PropsParam>();

  useEffect(() => {
    loadSubModules();
  }, []);

  const loadSubModules = useCallback(async () => {
    const response = await axios.get(`http://localhost:8080/submodules/module/${params.moduleId}`);
    setSubModules(response.data);
  }, []);

  return (
    <Container>

      <ContainerSubModule>
        {subModules.map((subModule: any) => (
          <SubModule key={subModule.id} to={`/lesson/${subModule.id}`} >
            <h1>{subModule.name}</h1>
            <p>{subModule.description}</p>
          </SubModule>
        ))}
      </ContainerSubModule>

    </Container>
  );
}

export default SubModuleList;