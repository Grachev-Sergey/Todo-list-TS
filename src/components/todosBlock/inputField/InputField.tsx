import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, changingArrow } from '../../../redux/taskSlice';
import { InputFieldContainer } from './inputFieldStyles'
import arrow from '../../../imgs/arrowDown.png';

function InputField() {
  const [text, setText] = useState(''); 
  const dispatch = useDispatch();

  const createTodoElem = (event: React.FormEvent) => {
    event.preventDefault();
    if (!text.trim()) return;
    dispatch(
      addTask({
        todoText: text,
      })
    );
    setText('');
  };
  
  const changingStateArrow = () => dispatch(changingArrow());

  const changeText = (elem: React.ChangeEvent<HTMLInputElement>) => {
    setText(elem.target.value);
  };

  return (
    <InputFieldContainer>
      <button
        className="button"
        onClick={changingStateArrow}
      >
        <img
          src={arrow}
          alt="arrow"
          className="img"
        />
      </button>
      <form onSubmit={createTodoElem}>
        <input
          type="text"
          className="input"
          placeholder="What needs to be done?"
          value={text}
          onChange={changeText}
        />
      </form>
    </InputFieldContainer>
  );
}

export default InputField;