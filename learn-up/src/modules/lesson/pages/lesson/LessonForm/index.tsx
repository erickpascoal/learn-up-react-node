import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRouteMatch } from 'react-router-dom';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import TextArea from '../../../../../components/TextArea';
import api from '../../../../../services/api';
import { Container, Form } from './styles';

interface ParamsProps {
  subModuleId: string;
}

const LessonForm: React.FC = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const { params } = useRouteMatch<ParamsProps>();

  const goToBack = useCallback(async () => {
    window.history.back();
  }, []);

  const onSubmit = useCallback(async ({ name, description, link }: any) => {
    try {
      const lesson = {
        name,
        description,
        link,
        subModule: {
          id: params.subModuleId
        }
      }

      await api.post('/lessons', lesson);

      goToBack();
    } catch (error) {
      alert('deu erro'); // criar component toast
    }

  }, [goToBack, params.subModuleId]);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <header>
          <h1>Cadastro de Aula</h1>
        </header>

        <Input name="name" placeholder="Nome" errors={errors} register={register({ required: true })} />

        <Input name="link" placeholder="Link" errors={errors} register={register({ required: true })} />

        <TextArea name="description" placeholder="Descrição" errors={errors} register={register({ required: true })} />

        <footer>
          <Button buttonClass="primary" type="submit">Salvar</Button>
          <Button buttonClass="dark" type="button" onClick={goToBack}>Cancelar</Button>
        </footer>
      </Form>

    </Container>
  );
}

export default LessonForm;