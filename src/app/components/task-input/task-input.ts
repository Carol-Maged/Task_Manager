import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Task, Priority } from '../../model/model';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.html',
  styleUrls: ['./task-input.css'],
})
export class TaskInput {

  @Input() task!: Task;
  @Input() isEditMode = false;
  @Output() addTask = new EventEmitter<Task>();

  title: string = '';
  priority: Priority | '' = '';
  date: string = '';
  category: string = '';
  description: string = '';

  onSubmit() {
    if (!this.title.trim() || !this.priority || !this.date) return;

    const newTask: Task = {
      id: uuidv4(),
      title: this.title,
      description: this.description,
      date: new Date(this.date),
      priority: this.priority,
      status: 'InProgress'
    };

    this.addTask.emit(newTask);
    this.resetForm();
  }

  resetForm() {
    this.title = '';
    this.priority = '';
    this.date = '';
    this.category = '';
    this.description = '';
  }
}