import filteredTodos from '../../../store/selectors';
import { useAppSelector } from '../../../utils/hooks/typedHooks';
import { TodoListContainer } from './TodoList.styles';
import TodoElem from './TodoElem';

function TodoList() {
  const todos = useAppSelector(filteredTodos);

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