import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';

import { Container, Content, HeaderContent, Lesson } from './styles';
import { FaChevronRight } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import Modal from '../../../../../components/Modal';
import Button from '../../../../../components/Button';

interface PropsParam {
  subModuleId: string;
}

const LessonList: React.FC = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonSelected, setLessonSelected] = useState<any>(null);
  const { params } = useRouteMatch<PropsParam>();
  const [moduleName, setModuleName] = useState<string | null>('');
  const [subModuleName, setSubModuleName] = useState<string | null>('');

  const getModuleStorage = useCallback(async () => {
    const moduleName = sessionStorage.getItem('@LearnUp:moduleName');
    const subModuleName = sessionStorage.getItem('@LearnUp:subModuleName');
    setModuleName(moduleName);
    setSubModuleName(subModuleName);
  }, []);

  const loadSubModules = useCallback(async () => {
    const response = await axios.get(`http://localhost:8080/lessons/submodule/${params.subModuleId}`);
    setLessons(response.data);
  }, [params]);

  const closeModal = useCallback(async () => {
    setLessonSelected(null);
  }, []);

  const goToBack = useCallback(async () => {
    window.history.back();
  }, []);

  useEffect(() => {
    loadSubModules();
    getModuleStorage();
  }, [loadSubModules, getModuleStorage]);

  return (
    <>
      <Container>
        <HeaderContent>
          <h1>
            <Link to="/">Cursos</Link>
            <FaArrowRight size={14} />
            <a onClick={goToBack}>{moduleName} </a>
            <FaArrowRight size={14} />
            {subModuleName}
          </h1>
          <Button buttonClass="primary">Cadastrar</Button>
        </HeaderContent>

        <Content>
          {lessons.map((lesson: any) => (
            <Lesson key={lesson.id} onClick={() => setLessonSelected(lesson)}  >
              <div>
                <h1>{lesson.name}</h1>
                <p>{lesson.description}</p>
              </div>

              <FaChevronRight size={23} />

            </Lesson>
          ))}
        </Content>

      </Container>

      { lessonSelected &&
        <Modal title={lessonSelected.name} closeModal={() => closeModal()}>

          <iframe src={lessonSelected.link}
            width="800" height="450" allow="autoplay; fullscreen" ></iframe>

        </Modal>
      }
    </>
  );
}

export default LessonList;