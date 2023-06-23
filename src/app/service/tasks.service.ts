import { Injectable } from '@angular/core';
import { Tasks } from './tasks';
import { TASKS } from './task-data';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTask():Tasks[]{
    return TASKS;
  }

}
