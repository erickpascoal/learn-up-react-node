import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/form/Input';
import TextArea from '../../../../../components/form/TextArea';
import api from '../../../../../services/api';
import { Container, Content, Form, ConainerImage, LogoCourse, HeaderContent } from './styles';
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

  const onSubmit = useCallback(async ({ name, description, color = '#8257e5' }: any) => {
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

      <HeaderContent>
        <h2>Cadastro de curso</h2>
      </HeaderContent>

      <Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ConainerImage>
            {!image && <button onClick={() => openUploadImage()} type="button">
              <FaImage />
            </button>}
            {image &&
              <LogoCourse>
                <img onClick={() => openUploadImage()} src={image} />
              </LogoCourse>
            }
            <input style={{ display: 'none' }} id="uploadImage" type="file" onChange={(file) => uploadImage(file)} />
          </ConainerImage>

          <Input name="name" placeholder="Nome" errors={errors} register={register({ required: true })} />

          <TextArea name="description" placeholder="Descrição" errors={errors} register={register({ required: true })} />

          <footer>
            <Button buttonClass="primary" type="submit">Salvar</Button>
            <Button buttonClass="dark" type="button" onClick={goToBack}>Cancelar</Button>
          </footer>
        </Form>
      </Content>

    </Container>
  );
}

export default CourseForm;