import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

export interface TaskInterface {
  status: boolean;
  name: string;
  minutes: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public taskSvc: TaskService) {}
  onSaveTask(form: TaskInterface): void {
    if (!form.name) return window.alert('Add task name please. =)');
    if (!form.minutes) return window.alert('Add task time please. =)');
    this.taskSvc.addTask(form);
  }
}
