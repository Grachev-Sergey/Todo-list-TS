import { useAppSelector, useAppDispatch } from '../../../../utils/hooks/typedHooks';
import { changeFilter } from '../../../../store/taskSlice';
import { FiltresContainer } from './Filters.style';

function Filters () {
  const filter = useAppSelector((state) => state.todos.filter);
  const dispatch = useAppDispatch();

  const handlerSelectionAllTodo = () => {
    dispatch(
      changeFilter('all')
    );
  };

  const handlerSelectionActiveTodo = () => {
    dispatch(
      changeFilter('active')
    );
  };

  const handlerSelectionComplitedTodo = () => {
    dispatch(
      changeFilter('complited')
    );
  };

  return (
    <FiltresContainer filter={filter}>
      <button 
        className="button all"
        onClick={handlerSelectionAllTodo}
      >
        All
      </button>
      <button 
        className="button active"
        onClick={handlerSelectionActiveTodo}
      >
        Active
      </button>
      <button 
        className="button complited"
        onClick={handlerSelectionComplitedTodo}
      >
        Complited
      </button>
    </FiltresContainer>
  );
};

export default Filters