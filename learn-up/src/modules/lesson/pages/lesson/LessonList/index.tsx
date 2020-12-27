import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Container, Lesson } from './styles';
import { FaChevronRight } from 'react-icons/fa';

interface PropsParam {
  subModuleId: string;
}

const LessonList: React.FC = () => {
  const [lessons, setLessons] = useState([]);
  const { params } = useRouteMatch<PropsParam>();

  useEffect(() => {
    loadSubModules();
  }, []);

  const loadSubModules = useCallback(async () => {
    const response = await axios.get(`http://localhost:8080/lessons/submodule/${params.subModuleId}`);
    setLessons(response.data);
  }, [lessons, params]);

  return (
    <Container>
      {lessons.map((lesson: any) => (
        <Lesson key={lesson.id} to={`/lesson/${lesson.id}`} >
          <div>
            <h1>{lesson.name}</h1>
            <p>{lesson.description}</p>
          </div>

          <FaChevronRight size={23} />

        </Lesson>
      ))}
    </Container>
  );
}

export default LessonList;