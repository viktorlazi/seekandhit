import {makeAutoObservable} from 'mobx';

export default class ListStore{
  colours = [];
  constructor(){
    makeAutoObservable(this);
  }
  addColour(x){
    this.colours.unshift(x);
  }
}