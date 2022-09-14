import { useSelector } from 'react-redux';
import filteredTodos from '../../../redux/selectors';
import { StoreType } from '../../../redux/store';
import styles from './todoList.module.css';
import TodoElem from './todoElem/TodoElem';


function TodoList() {

  const state = useSelector((state: StoreType) => state.todos);
  const todos = filteredTodos(state);

  return (
    <ul className={styles.todoList}>
      {
        todos.map(todo => (
          <TodoElem
            id={todo.id}
            value={todo.value}
            complited={todo.complited}
            key={todo.id}
          />
        ))
      }
    </ul>
  );
};

export default TodoList