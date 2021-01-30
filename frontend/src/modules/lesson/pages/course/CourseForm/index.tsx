import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../../../components/Button';
import ColorPicker from '../../../../../components/form/ColorPicker';
import Input from '../../../../../components/form/Input';
import TextArea from '../../../../../components/form/TextArea';
import api from '../../../../../services/api';
import { Container, Form, ConainerImage } from './styles';
import axios from 'axios';
import { FaImage } from 'react-icons/fa'

const CourseForm: React.FC = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const [image, setImage] = useState();

  const goToBack = useCallback(async () => {
    window.history.back();
  }, []);

  const uploadImage = useCallback(async (event) => {

    const [file] = event.nativeEvent?.target?.files;

    if (!file) {
      return;
    }

    const [fileName, type] = file.name.split('.');

    console.log(fileName, type);

    const response = await api.get(`aws/app-learnup/${fileName}/${type}`);

    const { resultUrl, signedRequestUrl } = response.data;

    await axios.put(`${signedRequestUrl}`, file, {
      headers: {
        'Content-Type': file.type,
        'x-amz-acl': 'public-read'
      }
    });

    setImage(resultUrl);

  }, [image]);

  const onSubmit = useCallback(async ({ name, description, color }: any) => {
    try {
      const course = {
        name,
        description,
        color,
        urlImage: image
      }

      await api.post('/courses', course);

      goToBack();
    } catch (error) {
      alert('deu erro'); // criar component toast
    }

  }, [goToBack, image]);

  const openUploadImage = useCallback(() => {
    document.getElementById('uploadImage')?.click();
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <header>
          <h1>Cadastro de curso</h1>
        </header>

        <ConainerImage>
          {!image && <button onClick={() => openUploadImage()} type="button">
            <FaImage />
          </button>}
          {image && <img onClick={() => openUploadImage()} src={image} />}
          <input style={{ display: 'none' }} id="uploadImage" type="file" onChange={(file) => uploadImage(file)} />
        </ConainerImage>

        <Input name="name" placeholder="Nome" errors={errors} register={register({ required: true })} />


        <ColorPicker name="color" placeholder="Cor" defaultValue="#8257e5" errors={errors} register={register({ required: true })} />

        <TextArea name="description" placeholder="Descrição" errors={errors} register={register({ required: true })} />

        <footer>
          <Button buttonClass="primary" type="submit">Salvar</Button>
          <Button buttonClass="dark" type="button" onClick={goToBack}>Cancelar</Button>
        </footer>
      </Form>

    </Container>
  );
}

export default CourseForm;