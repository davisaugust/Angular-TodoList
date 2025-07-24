import { Component } from '@angular/core';
import { TaskContainer } from '../task-container/task-container';

@Component({
  selector: 'app-home',
  imports: [TaskContainer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
