import { TaskInterface } from '../app.component';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: TaskInterface[] = [];
  private taskList = new BehaviorSubject<TaskInterface[]>([]);

  getTaskList(): Observable<TaskInterface[]> {
    return this.taskList.asObservable();
  }
  addTask(taskData: TaskInterface): void {
    const task = { ...taskData, status: false };
    this.tasks.push(task);
    this.taskList.next(this.tasks);
  }
  deleteTask(index: number): void {
    this.tasks.splice(index);
    this.taskList.next(this.tasks);
  }
}
