import React, { ButtonHTMLAttributes } from 'react';

import { ButtonStyle } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonClass?: string;
}

const Button: React.FC<ButtonProps> = ({ children, buttonClass = 'default', ...rest }) => {
  let color = '#ffffff';
  let backgroundColor = '#202024';
  let borderColorHover = '#202024';

  if (buttonClass == 'default') {
    borderColorHover = '#ffffff';
  }

  if (buttonClass == 'primary') {
    backgroundColor = '#8257e5';
  }

  return (
    <ButtonStyle
      color={color}
      borderColorHover={borderColorHover}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </ButtonStyle>
  );
}

export default Button;