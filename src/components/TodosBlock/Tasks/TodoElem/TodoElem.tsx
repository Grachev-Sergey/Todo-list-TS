import { useState } from 'react';
import { useAppDispatch } from '../../../../utils/hooks/typedHooks';
import { deleteTask, switchStatus, changeText } from '../../../../store/taskSlice';
import { Itasks } from '../../../../store/taskSlice';
import { TodoElems } from './todoElemStyles';
import checkMark from '../../../../assets/checkMark.png';

function TodoElem(props: Itasks) {
  const [focus, setFocus] = useState(false);
  const [newText, setNewText] = useState(props.value);
  const dispatch = useAppDispatch();

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

  const HandlerBlureEvent = (elem: React.ChangeEvent<HTMLInputElement>) => {
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
        onClick={switchTodoCompleted}
      >{props.complited && 
        <img
        src={checkMark}
        alt='CheckMark'
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
        onChange={changeValue}
        onBlur={HandlerBlureEvent}
        onKeyDown={saveChanges}
      />}
      <button
        className="delete"
        onClick={removeTodo}
      >
      x
      </button>
    </TodoElems>
  );
};

export default TodoElem