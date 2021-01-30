import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouteMatch } from 'react-router-dom';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/form/Input';
import Select from '../../../../../components/form/Select';
import TextArea from '../../../../../components/form/TextArea';
import api from '../../../../../services/api';
import { Container, Form } from './styles';

interface ParamsProps {
  subModuleId: string;
}

const LessonForm: React.FC = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const { params } = useRouteMatch<ParamsProps>();
  const [typeLesson, setTypeLesson] = useState('video');

  const goToBack = useCallback(async () => {
    window.history.back();
  }, []);

  const onSubmit = useCallback(async ({ name, description, type, link, markdownText }: any) => {

    try {
      const lesson = {
        name,
        description,
        type,
        link,
        markdownText,
        module: {
          id: params.subModuleId
        }
      }
      console.log('aaaaaaa', lesson);

      await api.post('/lessons', lesson);

      goToBack();
    } catch (error) {
      alert('deu erro'); // TODO: criar component toast
    }

  }, [goToBack, params.subModuleId]);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <header>
          <h1>Cadastro de Aula</h1>
        </header>

        <Input name="name" placeholder="Nome" errors={errors} register={register({ required: true })} />

        <Select
          name="type"
          options={[{ id: 'video', name: 'Video' }, { id: 'markdown', name: 'Markdown' }]}
          errors={errors} register={register({ required: false })}
          onChange={(event) => setTypeLesson(event.target.value)}
        />

        {typeLesson == 'video' && <Input name="link" placeholder="Link" errors={errors} register={register({ required: false })} />}

        {typeLesson == 'markdown' && <TextArea name="markdownText" placeholder="Markdown" errors={errors} register={register({ required: false })} />}

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