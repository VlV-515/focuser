import { TaskInterface } from '../app.component';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: TaskInterface[] = [];
  private taskList = new BehaviorSubject<TaskInterface[]>([]);
  private timeName = new BehaviorSubject<string>('Task');
  private timeTime = new BehaviorSubject<string>('25:00');
  getTaskList(): Observable<TaskInterface[]> {
    return this.taskList.asObservable();
  }
  getTimeName(): Observable<string> {
    return this.timeName.asObservable();
  }
  getTimeTime(): Observable<string> {
    return this.timeTime.asObservable();
  }
  addTask(taskData: TaskInterface): void {
    const task = { ...taskData, status: false };
    this.tasks.push(task);
    this.taskList.next(this.tasks);
  }
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.taskList.next(this.tasks);
  }
  startTask(index: number): void {
    this.tasks[index].status = true;
    let { name, minutes } = this.tasks[index];
    this.timeName.next(name);
    let countMilSegTotal = 1000 * (minutes * 60);
    let counter = countMilSegTotal;
    let timer = setInterval(() => {
      counter--;
      const convert: string = this.convertTime(counter);
      this.timeTime.next(convert);
      if (counter === 0) {
        alert('Finish');
        clearInterval(timer);
        this.deleteTask(index);
        this.timeName.next('Task');
        this.timeTime.next('25:00');
      }
    }, 1000);
  }
  convertTime(milliSec: number): string {
    return DateTime.fromMillis(milliSec).toFormat('mm:ss');
  }
}
