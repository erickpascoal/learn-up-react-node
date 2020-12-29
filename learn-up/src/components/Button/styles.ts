import { tint } from 'polished';
import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  borderColorHover?: string;
  backgroundColor?: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
  padding: 15px 50px;
  min-width: 100px;
  border-style: none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  border: solid 1px #202024;
  transition: background-color 0.2s;

  ${props => css`background-color: ${props.backgroundColor}; `}; 
  ${props => css`color: ${props.color}; `}; 
  
  & + button {
    margin-left: 5px;
  }

  &:hover {
    ${props => css`background-color: ${tint(0.1, `${props.backgroundColor}`)}`}; 
    ${props => css`border-color: ${props.borderColorHover}} `}; 
    }
`;