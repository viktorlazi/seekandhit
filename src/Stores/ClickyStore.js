import {makeAutoObservable, action} from 'mobx';

export default class ClickyStore{
  colourHex='red';
  content='aloo';
  constructor(){
    makeAutoObservable(this);
  }
  fetchColour(){
    fetch('http://www.colr.org/json/color/random', {cache:'no-store'})
    .then(res=>res.json())
    .then(action(data=>{this.colourHex = '#'+data.colors[0].hex}));
    console.log(this.colourHex);
  }
}