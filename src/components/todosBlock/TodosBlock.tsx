import { TodosContainer } from'./todosBlockStyles';
import InputField from './inputField/InputField';
import TodoList from './tasks/TodoList';
import FiltersAndCounter from './filterBlock/FiltersAndCounter';

function TodosBlock() {
  return (
    <TodosContainer>
      <InputField/>
      <TodoList/>
      <FiltersAndCounter/>
    </TodosContainer>
  );
};

export default TodosBlock;