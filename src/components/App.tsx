import { AppContainer } from './appStyles'
import Title from './title/Title';
import TodosBlock from './todosBlock/TodosBlock';

function App() {
  return (
    <AppContainer>
      <Title />
      <TodosBlock />
    </AppContainer>
  );
};

export default App;