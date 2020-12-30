import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import TextArea from '../../../../../components/TextArea';
import api from '../../../../../services/api';
import { Container, Form } from './styles';

const SubModuleForm: React.FC = () => {

  const { register, handleSubmit, watch, errors } = useForm();

  const goToBack = useCallback(async () => {
    window.history.back();
  }, []);

  const onSubmit = useCallback(async ({ name, description }: any) => {
    try {
      const module = {
        name,
        description
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

export default SubModuleForm;