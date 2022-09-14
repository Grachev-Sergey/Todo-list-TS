import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, changingArrow } from '../../../redux/taskSlice';
import styles from './inputField.module.css';
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
    <div>
      <button
        className={styles.button}
        onClick={changingStateArrow}
      >
        <img
          src={arrow}
          alt="arrow"
          className={styles.img}
        />
      </button>
      <form onSubmit={createTodoElem}>
        <input
          type="text"
          className={styles.input}
          placeholder="What needs to be done?"
          value={text}
          onChange={changeText}
        />
      </form>
    </div>
  );
}

export default InputField;