import { useSelector } from 'react-redux';
import filteredTodos from '../../../redux/selectors';
import { StoreType } from '../../../redux/store';
import { TodoListContainer } from './todoListStyles';
import TodoElem from './todoElem/TodoElem';


function TodoList() {

  const state = useSelector((state: StoreType) => state.todos);
  const todos = filteredTodos(state);

  return (
    <TodoListContainer>
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
    </TodoListContainer>
  );
};

export default TodoList