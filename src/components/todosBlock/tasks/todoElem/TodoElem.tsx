import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, switchStatus, changeText } from '../../../../redux/taskSlice';
import { Itasks } from '../../../../redux/taskSlice';
import styles from './todoElem.module.css';
import checkMark from '../../../../imgs/checkMark.png';

function TodoElem(props: Itasks) {
  const [focus, setFocus] = useState(false);
  const [newText, setNewText] = useState(props.value);
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(
      deleteTask(props.id)
    );
  };

  const switchTodoCompleted = () => {
    dispatch(
      switchStatus(props.id)
    );
  };

  const changeValue = (elem: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(elem.target.value);
  };

  const saveChanges = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      setFocus(false);
      dispatch(
        changeText({
          id: props.id,
          value: newText
        })
      );
    }
  };

  const blure = (elem: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(elem.target.value);
    setFocus(false);
    dispatch(
      changeText({
        id: props.id,
        value: newText,
      })
    );
  };

  return (
    <li>
      <button
        className={styles.toggle}
        onClick={switchTodoCompleted}
      >
        <img
          src={checkMark}
          alt='CheckMark'
          className={props.complited ? styles.img : styles.hide}
        />
      </button>
      {!focus ?
      <div 
        className={props.complited ? styles.taskComplited : styles.task}
        onDoubleClick={() => {setFocus(true)}}
      >
      {props.value}
      </div>
      : <input
        className={props.complited ? styles.taskComplited : styles.task}
        defaultValue={props.value}
        onChange={changeValue}
        onBlur={blure}
        onKeyDown={saveChanges}
      />}
      <button
        className={styles.delete}
        onClick={removeTodo}
      >
      x
      </button>
    </li>
  );
};

export default TodoElem