import React, { useCallback, useEffect, useState } from 'react';
import { Container, Content, HeaderContent, Course } from './styles';
import Button from '../../../../../components/Button';
import NoDataFound from '../../../../../components/NoDataFound';
import { useHistory } from 'react-router-dom';
import api from '../../../../../services/api';

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();

  const loadCourses = useCallback(async () => {
    const courses = await api.get('/courses');
    setCourses(courses.data);
  }, []);


  const handleCreateCourse = useCallback(() => {
    history.push('/curso/cadastro');
  }, [history]);

  const handleDeleteCourse = useCallback(async (course: any) => {
    await api.delete(`/courses/${course.id}`);

    const index = courses.findIndex((m: any) => m.id === course.id);

    const coursesTemp = [...courses];

    coursesTemp.splice(index, 1);

    setCourses(coursesTemp);

  }, [courses]);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  return (
    <Container>

      <HeaderContent>
        <h2>Escolha um curso para iniciar</h2>
        <Button buttonClass="primary" onClick={handleCreateCourse}>Cadastrar</Button>
      </HeaderContent>

      <Content>
        {courses.length > 0 ?
          courses.map((course: any) => (
            <Course
              bordercolor={course.color}
              key={course.id}
              to={`/curso/${course.id}/modulos`}
            // onContextMenuCapture={() => handleDeleteCourse(course)}
            >
              <img src={course.urlImage} />
              <h1>{course.name}</h1>
              <p>{course.description}</p>
            </Course>
          ))
          :
          <NoDataFound>
            <h3>Nenhuma curso foi cadastrado ainda.</h3>
          </NoDataFound>
        }
      </Content>

    </Container>
  );
}

export default CourseList;