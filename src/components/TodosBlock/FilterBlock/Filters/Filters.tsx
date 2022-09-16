import { useAppSelector, useAppDispatch } from '../../../../utils/hooks/typedHooks';
import { changeFilter } from '../../../../store/taskSlice';
import { FiltresContainer } from './Filters.style';

function Filters () {
  const filter = useAppSelector((state) => state.todos.filter);
  const dispatch = useAppDispatch();

  const allTodo = () => {
    dispatch(
      changeFilter('all')
    );
  };

  const activeTodo = () => {
    dispatch(
      changeFilter('active')
    );
  };

  const complitedTodo = () => {
    dispatch(
      changeFilter('complited')
    );
  };

  return (
    <FiltresContainer filter={filter}>
      <button 
        className="button all"
        onClick={allTodo}
      >
        All
      </button>
      <button 
        className="button active"
        onClick={activeTodo}
      >
        Active
      </button>
      <button 
        className="button complited"
        onClick={complitedTodo}
      >
        Complited
      </button>
    </FiltresContainer>
  );
};

export default Filters