import './App.css';
import Clicky from './Components/Clicky';
import ClickyStore from './Stores/ClickyStore';

const clickyStore = new ClickyStore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clicky content={clickyStore.content} />
      </header>
    </div>
  );
}
export default App;