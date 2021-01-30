import styled, { css } from 'styled-components';

interface TextAreaProps {
  isErro: boolean;
}

export const Container = styled.div<TextAreaProps>`  
  flex-direction: column;
  width: 100%;    
 
    label {
    color: #ffffff;
    margin-bottom: 2px;
    font-weight: 500;
    ${props => props.isErro && css`color: #F71837 `}
  }

  textarea {
    width: 100%;    
    border-radius: 5px;
    padding: 13px 15px;
    color: #ffffff;
    background-color: #121214;
    border: solid 1px #202024;

    &:focus {
      border-style: solid;
      border-width: 1px;
      border-color: #8257e5;
      ${props => props.isErro && css`border-color: #F71837; `}
    }
    
    ${props => props.isErro && css`border-color: #F71837 `}
  }
`;

export const TextErro = styled.p`
  color: #F71837;
  font-size: 12px;
  margin-top: 3px;
`;