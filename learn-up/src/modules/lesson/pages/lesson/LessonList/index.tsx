import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

import { Container, Lesson } from './styles';
import { FaChevronRight } from 'react-icons/fa';
import Modal from '../../../../../components/Modal';

interface PropsParam {
  subModuleId: string;
}

const LessonList: React.FC = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonSelected, setLessonSelected] = useState<any>(null);
  const { params } = useRouteMatch<PropsParam>();

  useEffect(() => {
    loadSubModules();
  }, []);

  const loadSubModules = useCallback(async () => {
    const response = await axios.get(`http://localhost:8080/lessons/submodule/${params.subModuleId}`);
    setLessons(response.data);
  }, [lessons, params]);

  const closeModal = useCallback(async () => {
    setLessonSelected(null);
  }, [lessonSelected]);

  return (
    <>
      <Container>
        {lessons.map((lesson: any) => (
          <Lesson key={lesson.id} onClick={() => setLessonSelected(lesson)}  >
            <div>
              <h1>{lesson.name}</h1>
              <p>{lesson.description}</p>
            </div>

            <FaChevronRight size={23} />

          </Lesson>
        ))}
      </Container>

      { lessonSelected &&
        <Modal title={lessonSelected.name} closeModal={() => closeModal()}>

          <iframe src={lessonSelected.link}
            width="900" height="500" allow="autoplay; fullscreen" ></iframe>

        </Modal>
      }
    </>
  );
}

export default LessonList;