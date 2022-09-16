import { TodosContainer } from'./TodosBlock.styles';
import InputField from './InputField';
import TodoList from './Tasks/TodoList';
import FiltersAndCounter from './FilterBlock/FiltersAndCounter';

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