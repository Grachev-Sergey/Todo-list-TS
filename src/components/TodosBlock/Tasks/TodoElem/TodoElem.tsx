import { useState } from 'react';
import { useAppDispatch } from '../../../../utils/hooks/typedHooks';
import { deleteTask, switchStatus, changeText } from '../../../../store/taskSlice';
import { Itasks } from '../../../../store/taskSlice';
import { TodoElems } from './TodoElemStyles';
import checkMark from '../../../../assets/checkMark.png';

function TodoElem(props: Itasks) {
  const [focus, setFocus] = useState(false);
  const [newText, setNewText] = useState(props.value);
  const dispatch = useAppDispatch();

  const handlerRemoveTodo = () => {
    dispatch(
      deleteTask(props.id)
    );
  };

  const handlerSwitchTodoStatus = () => {
    dispatch(
      switchStatus(props.id)
    );
  };

  const handlerChangeValue = (elem: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(elem.target.value);
  };

  const handlerSaveChanges = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      setFocus(false);
      dispatch(
        changeText({
          id: props.id,
          value: newText,
        })
      );
    }
  };

  const handlerBlure = (elem: React.ChangeEvent<HTMLInputElement>) => {
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
    <TodoElems isCompleted={!!props.complited}>
      <button
        className="toggle"
        onClick={handlerSwitchTodoStatus}
      >{props.complited && 
        <img
        src={checkMark}
        alt="button to mark the completion of todo"
      />}
      </button>
      {!focus ?
      <div 
        className="task"
        onDoubleClick={() => {setFocus(true)}}
      >
      {props.value}
      </div>
      : <input
        className="task"
        defaultValue={props.value}
        onChange={handlerChangeValue}
        onBlur={handlerBlure}
        onKeyDown={handlerSaveChanges}
      />}
      <button
        className="delete"
        onClick={handlerRemoveTodo}
      >
      x
      </button>
    </TodoElems>
  );
};

export default TodoElem