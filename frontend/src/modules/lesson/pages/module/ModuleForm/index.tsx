import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRouteMatch } from 'react-router-dom';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/form/Input';
import TextArea from '../../../../../components/form/TextArea';
import api from '../../../../../services/api';
import { Container, Form } from './styles';

interface ParamsProps {
  moduleId: string;
}

const ModuleForm: React.FC = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const { params } = useRouteMatch<ParamsProps>();

  const goToBack = useCallback(async () => {
    window.history.back();
  }, []);

  const onSubmit = useCallback(async ({ name, description }: any) => {
    try {
      const module = {
        name,
        description,
        course: {
          id: params.moduleId
        }
      }

      await api.post('/modules', module);

      goToBack();
    } catch (error) {
      alert('deu erro'); // criar component toast
    }

  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <header>
          <h1>Cadastro de modulo</h1>
        </header>

        <Input name="name" placeholder="Nome" errors={errors} register={register({ required: true })} />

        <TextArea name="description" placeholder="Descrição" errors={errors} register={register({ required: true })} />

        <footer>
          <Button buttonClass="primary" type="submit">Salvar</Button>
          <Button buttonClass="dark" type="button" onClick={goToBack}>Cancelar</Button>
        </footer>
      </Form>

    </Container>
  );
}

export default ModuleForm;