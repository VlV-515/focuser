import { TaskInterface } from '../app.component';
import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks!: TaskInterface[];
  private taskList = new Subject<TaskInterface[]>();

  getTaskList(): Observable<TaskInterface[]> {
    return this.taskList.asObservable();
  }
  addTask(task: TaskInterface): void {
    this.tasks.push(task);
    this.taskList.next(this.tasks);
  }
  deleteTask(index: number): void {
    this.tasks.splice(index);
    this.taskList.next(this.tasks);
  }
}
