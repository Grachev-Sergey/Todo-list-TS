import { leaveActiveTasks } from '../../../store/taskSlice';
import { useAppSelector, useAppDispatch } from '../../../utils/hooks/typedHooks';
import { Footer } from './FiltersAmdCounter.styles';
import Filters from './Filters';

function FiltersAndCounter () {
  const todos = useAppSelector((state) => state.todos.tasks);
  const dispatch = useAppDispatch();

  const complitedTodos = todos.map(todo => todo.complited);

  const handlerClearComplited = () => dispatch(leaveActiveTasks());

  const numActiveTodos = todos.filter(todo => !todo.complited);


  return (
    <Footer>
      <span className="counter">
        {numActiveTodos.length}
        {numActiveTodos.length === 1 ? ' item ' : ' items '}
        left
      </span>
      <Filters/>
      {!complitedTodos.includes(true) ?
      <div className='plug'></div>
      :<button
      onClick={handlerClearComplited}
      >
      Clear complited
      </button>
      }
    </Footer>
  );
};

export default FiltersAndCounter