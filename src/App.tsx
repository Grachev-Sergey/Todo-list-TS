import { AppContainer } from './App.styles';
import Title from './components/Title';
import TodosBlock from './components/TodosBlock';

function App() {
  return (
    <AppContainer>
      <Title />
      <TodosBlock />
    </AppContainer>
  );
};

export default App;