import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouteMatch } from 'react-router-dom';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/form/Input';
import Select from '../../../../../components/form/Select';
import TextArea from '../../../../../components/form/TextArea';
import api from '../../../../../services/api';
import { Container, Form } from './styles';
import jsZip from 'jszip';

interface ParamsProps {
  subModuleId: string;
}

const LessonForm: React.FC = () => {
  let markdownText = ''

  const { register, handleSubmit, watch, errors } = useForm();
  const { params } = useRouteMatch<ParamsProps>();
  const [typeLesson, setTypeLesson] = useState('video');

  const goToBack = useCallback(async () => {
    window.history.back();
  }, []);

  const onSubmit = useCallback(async ({ name, description, link, text }: any) => {

    try {
      const lesson = {
        name,
        description,
        text,
        link,
        markdownText: markdownText,
        module: {
          id: params.subModuleId
        }
      }

      await api.post('/lessons', lesson);

      goToBack();
    } catch (error) {
      alert('deu erro'); // TODO: criar component toast
    }

  }, [goToBack, params.subModuleId]);


  const getFile = useCallback(async (event) => {

    const [file] = event.nativeEvent?.target?.files;

    if (!file) {
      return;
    }

    const files: any[] = [];

    const zipFile = await jsZip.loadAsync(file);

    await new Promise((resolve, reject) => {
      Object.keys(zipFile.files).forEach(async function (filename) {
        const fileData = await zipFile.files[filename].async('string');
        files.push(fileData)

        if (Object.keys(zipFile.files).length == files.length) {
          resolve(files)
        }
      });
    });

    console.log('lista', files)
    markdownText = files[0];

    console.log(markdownText);


  }, [markdownText]);


  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <header>
          <h1>Cadastro de Aula</h1>
        </header>

        <Input name="name" placeholder="Nome" errors={errors} register={register({ required: true })} />

        {/* <Select
          name="type"
          options={[{ id: 'video', name: 'Video' }, { id: 'markdown', name: 'Markdown' }]}
          errors={errors} register={register({ required: false })}
          onChange={(event) => setTypeLesson(event.target.value)}
        /> */}

        {/* {typeLesson == 'video' && <Input name="link" placeholder="Link" errors={errors} register={register({ required: false })} />}

        {typeLesson == 'markdown' && <input style={{ marginBottom: 20 }} type="file" onChange={(file) => getFile(file)} />} */}

        <TextArea name="description" placeholder="Descrição curta" errors={errors}
          register={register({
            required: true,
            maxLength: { message: 'Tamnho máximo: 100 caracteres', value: 100 }
          })} />

        <Input name="link" placeholder="Link" errors={errors} register={register({ required: false })} />

        <TextArea name="text" placeholder="Texto simples, Markdown ou HTML" errors={errors} register={register()} />

        <footer>
          <Button buttonClass="primary" type="submit">Salvar</Button>
          <Button buttonClass="dark" type="button" onClick={goToBack}>Cancelar</Button>
        </footer>
      </Form>

    </Container>
  );
}

export default LessonForm;