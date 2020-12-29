import React, { InputHTMLAttributes, useCallback, useState } from 'react';

import { ColorStled, TextErro } from './styles';

interface ColorPickerProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  label?: string;
  name: string;
  errors?: any;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ name, placeholder, label, register, errors, ...rest }) => {

  const [isFocused, setIsFocused] = useState(false);

  const getMessageErro = () => {
    if (errors[name] && errors[name].message !== '') {
      return errors[name].message;
    }

    if (errors[name] && errors[name].type === 'required') {
      return 'Campo obrigatório.';
    }
  };

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <>
      {label && <label>{label}</label>}
      <ColorStled isFocused={isFocused} isErro={errors && errors[name]}>

        {placeholder && <p> {placeholder} </p>}

        <input
          name={name}
          ref={register}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
          type="color"
        />

      </ColorStled>
      {errors && <TextErro>{getMessageErro()}</TextErro>}
    </>
  );
}

export default ColorPicker;