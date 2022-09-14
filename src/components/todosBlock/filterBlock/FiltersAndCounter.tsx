import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { leaveActiveTasks } from '../../../redux/taskSlice';
import { StoreType } from '../../../redux/store';
import { Footer } from './filtersAmdCounterStyles'
import Filters from './filters/Filters';

function FiltersAndCounter () {
  const todos = useSelector((state:StoreType) => state.todos.tasks);
  const dispatch = useDispatch();

  const clearComplited = () => dispatch(leaveActiveTasks());

  let numActiveTodos = todos.filter(todo => !todo.complited);

  return (
    <Footer>
      <span className="counter">
        {numActiveTodos.length}
        {numActiveTodos.length === 1 ? ' item ' : ' items '}
        left
      </span>
      <Filters/>
      <button
        className="button"
        onClick={clearComplited}
      >
        Clear complited
      </button>
    </Footer>
  );
};

export default FiltersAndCounter