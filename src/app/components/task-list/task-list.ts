
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../model/model';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  @Input() tasks: Task[] = [];

  @Output() deleteTask = new EventEmitter<string>();
  @Output() doneTask = new EventEmitter<Task>();
  @Output() updateTask = new EventEmitter<Task>();

  onDelete(id: string) {
    this.deleteTask.emit(id);
  }

  onDone(task: Task) {
    this.doneTask.emit(task);
  }

  onUpdate(task: Task) {
    this.updateTask.emit(task);
  }

}
