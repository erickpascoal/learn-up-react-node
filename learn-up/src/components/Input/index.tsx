import React, { InputHTMLAttributes } from 'react';

import { Container, TextErro } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  label?: string;
  name: string;
  errors?: any;
}

const Input: React.FC<InputProps> = ({ name, label, register, errors, ...rest }) => {

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
      <input name={name} ref={register} {...rest} type="text" />
      {errors && <TextErro>{getMessageErro()}</TextErro>}
    </Container>
  );
}

export default Input;