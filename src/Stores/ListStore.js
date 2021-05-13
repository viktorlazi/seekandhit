import {makeAutoObservable} from 'mobx';

export default class ListStore{
  colours = [];
  constructor(){
    makeAutoObservable(this);
  }
  addColour(x){
    this.colours.push(x);
    console.log(this.colours)
  }
}