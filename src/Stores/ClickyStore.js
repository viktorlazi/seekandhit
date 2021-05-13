import {makeAutoObservable} from 'mobx';

export default class ClickyStore{
  colour='red';
  content='aloo';
  constructor(){
    makeAutoObservable(this);
  }
}