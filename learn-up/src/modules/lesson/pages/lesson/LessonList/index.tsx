import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import { Container, Content, HeaderContent, Lesson } from './styles';
import Modal from '../../../../../components/Modal';
import Button from '../../../../../components/Button';
import NoDataFound from '../../../../../components/NoDataFound';
import api from '../../../../../services/api';

interface ParamsProps {
  subModuleId: string;
}

const LessonList: React.FC = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonSelected, setLessonSelected] = useState<any>(null);
  const [subModule, setSubModule] = useState<any>(null);
  const { params } = useRouteMatch<ParamsProps>();
  const history = useHistory();

  const loadActualSubModule = useCallback(async () => {
    const response = await api.get(`/submodules/${params.subModuleId}`);
    setSubModule(response.data);
  }, [params.subModuleId]);

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
    history.push(`/modulo/${params.subModuleId}/aulas/cadastro`);
  }, [history, params.subModuleId]);

  const handleDeleteLesson = useCallback(async (lesson: any) => {
    await api.delete(`/lessons/${lesson.id}`);

    const index = lessons.findIndex((l: any) => l.id === lesson.id);

    const lessonsTemp = [...lessons];

    lessonsTemp.splice(index, 1);

    setLessons(lessonsTemp);

  }, [lessons]);

  useEffect(() => {
    loadActualSubModule();
    loadSubModules();
  }, [loadSubModules, loadActualSubModule]);

  return (
    <>
      <Container>
        <HeaderContent>
          <h2>
            <Link to="/">Cursos</Link>
            <FaArrowRight size={14} />
            <a onClick={goToBack}>{subModule?.module?.name} </a>
            <FaArrowRight size={14} />
            {subModule?.name}
          </h2>
          <Button buttonClass="primary" onClick={handleCreateLesson}>Cadastrar</Button>
        </HeaderContent>

        <Content>
          {lessons.length > 0 ?
            lessons.map((lesson: any) => (
              <Lesson
                key={lesson.id}
                onClick={() => setLessonSelected(lesson)}
              // onContextMenuCapture={() => handleDeleteLesson(lesson)}
              >
                <div>
                  <h2>{lesson.name}</h2>
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