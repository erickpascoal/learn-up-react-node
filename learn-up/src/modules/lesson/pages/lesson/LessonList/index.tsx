import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import { Container, Content, HeaderContent, Lesson } from './styles';
import Modal from '../../../../../components/Modal';
import Button from '../../../../../components/Button';
import NoDataFound from '../../../../../components/NoDataFound';
import api from '../../../../../services/api';

interface PropsParam {
  subModuleId: string;
}

const LessonList: React.FC = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonSelected, setLessonSelected] = useState<any>(null);
  const { params } = useRouteMatch<PropsParam>();
  const [moduleName, setModuleName] = useState<string | null>('');
  const [subModuleName, setSubModuleName] = useState<string | null>('');
  const history = useHistory();

  const getModuleStorage = useCallback(async () => {
    const moduleName = sessionStorage.getItem('@LearnUp:moduleName');
    const subModuleName = sessionStorage.getItem('@LearnUp:subModuleName');
    setModuleName(moduleName);
    setSubModuleName(subModuleName);
  }, []);

  const loadSubModules = useCallback(async () => {
    const response = await api.get(`/lessons/submodule/${params.subModuleId}`);
    setLessons(response.data);
  }, [params]);

  const closeModal = useCallback(async () => {
    setLessonSelected(null);
  }, []);

  const goToBack = useCallback(async () => {
    window.history.back();
  }, []);

  const handleCreateLesson = useCallback(() => {
    history.push('/aula/cadastrar');
  }, []);

  useEffect(() => {
    loadSubModules();
    getModuleStorage();
  }, [loadSubModules, getModuleStorage]);

  return (
    <>
      <Container>
        <HeaderContent>
          <h2>
            <Link to="/">Cursos</Link>
            <FaArrowRight size={14} />
            <a onClick={goToBack}>{moduleName} </a>
            <FaArrowRight size={14} />
            {subModuleName}
          </h2>
          <Button buttonClass="primary" onClick={handleCreateLesson}>Cadastrar</Button>
        </HeaderContent>

        <Content>
          {lessons.length > 0 ?
            lessons.map((lesson: any) => (
              <Lesson key={lesson.id} onClick={() => setLessonSelected(lesson)}  >
                <div>
                  <h1>{lesson.name}</h1>
                  <p>{lesson.description}</p>
                </div>

                <FaChevronRight size={23} />

              </Lesson>
            )) :

            <NoDataFound>
              <h3>Nenhuma aula foi cadastrada para este modulo ainda.</h3>
            </NoDataFound>

          }
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