import { Component } from '@angular/core';
import { Tarefa } from '../../../tarefa';
import { TaskService } from '../../services/task-service';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/task-item';
import { AddTask } from '../add-task/add-task';

@Component({
  selector: 'app-task-container',
  imports: [CommonModule, TaskItem, AddTask],
  standalone:true,
  templateUrl: './task-container.html',
  styleUrl: './task-container.css'
})
export class TaskContainer {
  tarefas: Tarefa[] = [];
  
    constructor(private taskService: TaskService){}
  
    ngOnInit(): void{
      
      this.taskService.getTasks().subscribe((data)=>{
        this.tarefas = data;
      });
  
    }

    
    addTask(tarefa: Tarefa){
      this.taskService.addTask(tarefa).subscribe((tarefa) => {
        this.tarefas.push(tarefa);
      });
    }

    deleteTask(tarefa: Tarefa) {
      this.taskService.deleteTask(tarefa).subscribe(() => {
      console.log('Tarefa deletada com sucesso!');
      this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
  });
}

    toggleConcluido(tarefa: Tarefa){
      tarefa.concluido = !tarefa.concluido;
      this.taskService.updateTask(tarefa).subscribe();
    }
}
