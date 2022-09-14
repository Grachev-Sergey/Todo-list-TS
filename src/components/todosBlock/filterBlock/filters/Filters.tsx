import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../../../redux/taskSlice';
import { FiltresContainer } from './filtersStyle';

function Filters () {
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();

  const allTodo = () => {
    setStatus('all');
    dispatch(
      changeFilter('all')
    );
  };

  const activeTodo = () => {
    setStatus('active');
    dispatch(
      changeFilter('active')
    );
  };

  const complitedTodo = () => {
    setStatus('completed');
    dispatch(
      changeFilter('completed')
    );
  };

  return (
    <FiltresContainer>
      <button 
        className={status === 'all' ? "buttonSelected" : "button"} 
        onClick={allTodo}
      >
        All
      </button>
      <button 
        className={status === 'active' ? "buttonSelected" : "button"}
        onClick={activeTodo}
      >
        Active
      </button>
      <button 
        className={status === 'completed' ? "buttonSelected" : "button"}
        onClick={complitedTodo}
      >
        Complited
      </button>
    </FiltresContainer>
  );
};

export default Filters