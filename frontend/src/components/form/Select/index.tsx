import React, { InputHTMLAttributes } from 'react';

import { Container, TextErro } from './styles';

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  register?: any;
  label?: string;
  name: string;
  options: any[];
  errors?: any;
}

const Select: React.FC<Props> = ({ name, options, label, register, errors, ...rest }) => {

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
      <select name={name} ref={register} {...rest}>
        {options.map(object => (
          <option key={object.id} value={object.id}>
            {object.name}
          </option>
        ))}
      </select>
      {errors && <TextErro>{getMessageErro()}</TextErro>}
    </Container>
  );
}

export default Select;