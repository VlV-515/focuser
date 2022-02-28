import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

export interface TaskInterface {
  name: string;
  minutes: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onSaveTask(form: TaskInterface): void {
    if (!form.name) return window.alert('Add task name please. =)');
    if (!form.minutes) return window.alert('Add task time please. =)');
    console.table({ form });
  }
}
