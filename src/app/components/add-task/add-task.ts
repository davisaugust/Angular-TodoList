import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../../tarefa';

@Component({
  selector: 'app-add-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {

  @Output() onAddTask = new EventEmitter<Tarefa>(); 

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;

  onSubmit(){
    if(!this.tarefa){
      alert('Por favor, adicione uma tarefa')
      return;
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }

    this.onAddTask.emit(novaTarefa);

    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;

  }
}
