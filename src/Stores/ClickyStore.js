import {makeAutoObservable, action} from 'mobx';

export default class ClickyStore{
  colourHex='#fff';
  content='aloo';
  addColourToList;
  constructor(_addColourToList){
    makeAutoObservable(this);
    this.addColourToList = _addColourToList;
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
        this.addColourToList(hex);
      }
    }));
  }
  /* api not working ?
  fetchTenColours(){
    fetch('http://www.colr.org/json/color/random/10/')
    .then(res=>res.json())
    .then(action(data=>{
      console.log(data)
    }));
  }
  */
}