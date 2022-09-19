import { useState } from 'react';
import { useAppDispatch } from '../../../utils/hooks/typedHooks';
import { addTask, changingStatusAllTodos } from '../../../store/taskSlice';
import { InputFieldContainer } from './InputField.styles';
import arrow from '../../../assets/arrowDown.png';

function InputField() {
  const [text, setText] = useState(''); 
  const dispatch = useAppDispatch();

  const handlerCreateTodoElem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim()) return;
    dispatch(
      addTask(text)
    );
    setText('');
  };
  
  const handlerChangingStatus = () => dispatch(changingStatusAllTodos());

  const changeText = (elem: React.ChangeEvent<HTMLInputElement>) => {
    setText(elem.target.value);
  };

  return (
    <InputFieldContainer>
      <button
        onClick={handlerChangingStatus}
      >
        <img
          src={arrow}
          alt="button to mark the completion of all todos"
        />
      </button>
      <form onSubmit={handlerCreateTodoElem}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={changeText}
        />
      </form>
    </InputFieldContainer>
  );
}

export default InputField;