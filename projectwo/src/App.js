import './App.css';
import { Div } from './Components/Div';
import { AppContext } from './contexts/AppContext';

function App() {

  return (
    <AppContext>
      <Div/>
    </AppContext>
  );  
}

export default App; 
