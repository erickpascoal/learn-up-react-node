import styled, { css } from 'styled-components';

interface ContainerInput {
  isErro: boolean;
  isFocused: boolean;
}

export const ColorStled = styled.div<ContainerInput>`  
    padding: 5px 15px 5px 15px;    
    border-radius: 5px;
    color: #ffffff;
    background-color: #121214;
    border-style: solid;
    border-width: 1px;
    border-color: #202024;

    display: flex;
    align-items: center;

    /* &:focus {
     
      ${props => props.isErro && css`border-color: #F71837; `}
    } */

    ${props => props.isFocused && css`
      border-style: solid;
      border-width: 1px;
      border-color: #8257e5;
     `}

    ${props => props.isErro && css`border-color: #F71837 `}
 
   p{
     color: #757575;
     margin-right: 10px;
   }

  label {
    color: #ffffff;
    margin-bottom: 1px;
    font-weight: 500;
    ${props => props.isErro && css`color: #F71837 `}
  }

  input {
    height: 30px;
    width: 30px;  
    background-color: #121214;
    border: 0;
  }
`;

export const TextErro = styled.p`
  color: #F71837;
  font-size: 12px;
  margin-top: 3px;
`;
