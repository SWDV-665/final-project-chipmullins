
import { Injectable } from '@angular/core';

/*
  Generated class for the ListerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListerServiceProvider {


  tasks = [];

  completed = [];

  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }

  getTasks() {
    return this.tasks;
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  editTask(task, index) {
    this.tasks[index] = task;
  
  }

  finishTask(task, index) {
    this.completed.push(task);
    this.tasks.splice(index, 1);
  }

  getCompleted() {
    return this.completed;
  }

}
