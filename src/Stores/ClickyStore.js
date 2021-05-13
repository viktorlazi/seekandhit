import {makeAutoObservable, action} from 'mobx';

export default class ClickyStore{
  colourHex='#fff';
  content='aloo';
  addColour;
  constructor(_addColour){
    makeAutoObservable(this);
    this.addColour = _addColour;
  }
  fetchColour(){
    fetch('http://www.colr.org/json/color/random', {cache:'no-store'})
    .then(res=>res.json())
    .then(action(data=>{
      this.colourHex = '#'+data.colors[0].hex
      this.addColour(this.colourHex);
    }));
  }
}