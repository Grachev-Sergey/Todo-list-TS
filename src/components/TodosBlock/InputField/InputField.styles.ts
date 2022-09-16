import styled from 'styled-components'

export const InputFieldContainer = styled.div`
  max-width: 550px;

  img {
    margin-top: 10px;
    width: 20px;
    height: 20px;
    background-color: ${props => props.theme.colors.whiteBg};
  }

  form {
    max-width: 550px;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    padding: 16px 0 16px 60px;
    border: none;
    background-color: ${props => props.theme.colors.whiteBg};
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
    outline: 0;
    font-size: 24px;
    line-height: 1.4em;
  }

  button {
    margin:14px 0 14px 10px;
    position: absolute;
    width: 30px;
    height: 30px;
    opacity: 0.2;
    border: none;
    cursor: pointer;
  }

  ::-webkit-input-placeholder {
    color : rgba(175, 47, 47, 0.15);
    font-style: italic;
  }
  
  @media only screen and (${props => props.theme.media.small}) {
    input {
      font-size: 20px;
      padding: 16px 0 10px 45px;
    }

    img {
    margin-top: 3px;
    }
  }
`