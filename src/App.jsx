import {observer} from 'mobx-react';
import './App.css';

import Clicky from './Components/Clicky';
import List from './Components/List'; 

import ClickyStore from './Stores/ClickyStore';
import ListStore from './Stores/ListStore';

const listStore = new ListStore();
const clickyStore = new ClickyStore((x)=>listStore.addColour(x));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List elements={listStore.colours} />
        <Clicky store={clickyStore} />
      </header>
    </div>
  );
}
export default observer(App);