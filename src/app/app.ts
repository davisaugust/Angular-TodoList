import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskContainer } from './components/task-container/task-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular-TodoList';
}
