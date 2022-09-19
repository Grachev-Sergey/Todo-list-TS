import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
  background-color: ${({ theme }) => theme.colors.whiteBg};
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%);
  
  button {
    border: none;
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.whiteBg};
    font-size: 15px;
    cursor: pointer;
  }

  .counter {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 100;
    font-family: roboto;
    font-size: 15px;
    line-height: 25px;
  }
  .plug {
    width: 116.22px;
  }

  @media only screen and (${({ theme }) => theme.media.small}) {
    flex-direction: column;
    padding: 10px 15px;
    .counter {
      display: block;
      text-align: center;
    }
  }
`