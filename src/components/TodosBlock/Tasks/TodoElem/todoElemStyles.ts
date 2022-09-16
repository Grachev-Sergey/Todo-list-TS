import styled, { css } from 'styled-components';

type StylesProps = {
  isCompleted: boolean;
}

export const TodoElems = styled.li<StylesProps>`

  position: relative;
  background-color: ${props => props.theme.colors.whiteBg};

  img {
    width: 18px;
    height: 18px;
  }

  .toggle {
    margin:14px 0 14px 10px;
    position: absolute;
    width: 30px;
    height: 30px;
    opacity: 0.5;
    border-radius: 25px;
    cursor: pointer;
  }

  .delete {
    position: absolute;
    top: 9px;
    right: 10px;
    width: 40px;
    height: 40px;
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.colors.whiteBg};
    transition: color 0.2s ease-out;
    background-color: ${props => props.theme.colors.whiteBg};
    border: none;
    cursor: pointer;
  }
  
  .delete:hover {
    color: #da9090;
  }

  .task {
    box-sizing: border-box;
    width: 100%;
    font-family: roboto;
    display: block;
    font-size: 24px;
    font-weight: 400;
    padding: 16px 16px 16px 60px;
    border: none;
    margin-bottom: 1px;
    /* text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'}; */

    ${props => props.isCompleted && css`
      text-decoration: line-through;
      color:#d9d9d9;
    `}
  }

  input:focus{
    outline: none;
  }
`