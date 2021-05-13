import {makeAutoObservable, action} from 'mobx';

export default class ClickyStore{
  colourHex='#fff';
  content='aloo';
  addColour;
  constructor(_addColour){
    makeAutoObservable(this);
    this.addColour = _addColour;
  }
  setContent(x){
    this.content = x;
  }
  fetchColour(){
    fetch('http://www.colr.org/json/color/random', {cache:'no-store'})
    .then(res=>res.json())
    .then(action(data=>{
      if(data.colors[0].hex){
        const hex = '#' + data.colors[0].hex;
        this.colourHex = hex;
        this.addColour(hex);
      }
    }));
  }
}