import styled from 'styled-components';

export const TodoElems = styled.li`

  position: relative;
  background-color: #fff;

  .hide {
    display: none;
  }

  .toggle {
    margin:14px 0 14px 10px;
    position: absolute;
    width: 30px;
    height: 30px;
    opacity: 0.5;
    border-radius: 25px;
  }
  .img {
    width: 18px;
    height: 18px;
  }

  .delete {
    position: absolute;
    top: 9px;
    right: 10px;
    width: 40px;
    height: 40px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    transition: color 0.2s ease-out;
    background-color: #fff;
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
  }

  .taskComplited {
    width: 100%;
    font-family: roboto;
    display: block;
    font-size: 24px;
    font-weight: 400;
    padding: 16px 16px 16px 60px;
    border: none;
    margin-bottom: 1px;
    text-decoration: line-through;
    color:#d9d9d9;
  }

  input:focus{
    outline: none;
  }
`