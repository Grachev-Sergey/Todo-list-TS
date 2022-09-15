import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%);

  .counter {
    color: #777;
    font-weight: 100;
    font-family: roboto;
    font-size: 15px;
  }
  
  .button {
    border: none;
    color: #777;
    background-color: #fff;
    font-size: 15px;
    cursor: pointer;
  }


  @media only screen and (max-width: 450px) {
    flex-direction: column;
    padding: 10px 15px;
    .counter {
      display: block;
      text-align: center;
    }
  }
`