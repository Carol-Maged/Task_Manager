import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {

  @Input() task!: Task;

  @Output() deleteTask = new EventEmitter<string>();
  @Output() doneTask = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();

  onDelete() {
    this.deleteTask.emit(this.task.id);
  }

  onDone() {
    this.doneTask.emit(this.task);
  }

  onUpdate() {
    this.updateTask.emit(this.task);
  }
}

  


