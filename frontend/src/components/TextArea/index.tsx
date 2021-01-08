import React, { InputHTMLAttributes, } from 'react';
import { TextareaHTMLAttributes } from 'react-dom/node_modules/@types/react';

import { Container, TextErro } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register?: any;
  label?: string;
  name: string;
  errors?: any;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, register, errors, ...rest }) => {

  const getMessageErro = () => {
    if (errors[name] && errors[name].message !== '') {
      return errors[name].message;
    }

    if (errors[name] && errors[name].type === 'required') {
      return 'Campo obrigatório.';
    }
  };

  return (
    <Container isErro={errors && errors[name]}>
      {label && <label>{label}</label>}
      <textarea name={name} ref={register} rows={5} {...rest} />

      {errors && <TextErro>{getMessageErro()}</TextErro>}
    </Container>
  );
}

export default TextArea;