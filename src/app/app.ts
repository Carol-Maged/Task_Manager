import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Slider } from './components/slider/slider';
import { TaskInput } from './components/task-input/task-input';
import { TaskTabs } from './components/task-tabs/task-tabs';
import { TaskList } from './components/task-list/task-list';
import { tabName, Task } from './model/model';

@Component({
  selector: 'app-root',
  //imports: [Header,Slider,TaskInput,TaskTabs,TaskList],
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('Task_Manager');
  tasks: Task[] = [];

  onAddTask(task: Task) {
    console.log('Task added:', task);
    this.tasks.push(task);
  }

  selectedTab: tabName = 'AllTask';

  onTabChange(filter: tabName) {
    this.selectedTab = filter;
  }

  deleteTask(id: string) {
    console.log('App deleting', id);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  selectedTask!: Task;
  showModal = false;

  openUpdateModal(task: Task) {
    this.selectedTask = { ...task }; 
    this.showModal = true;
  }

  saveUpdatedTask() {
    const index = this.tasks.findIndex(t => t.id === this.selectedTask.id);
    if (index !== -1) {
      this.tasks[index] = this.selectedTask;
    }
    this.showModal = false;
  }


  // not recomended to have logic inside
  get filteredTasks(): Task[] {
    if (this.selectedTab === 'AllTask') {
      return this.tasks;
    } else if (this.selectedTab === 'InProgress') {
      return this.tasks.filter(task => task.status === 'InProgress');
    } else {
      return this.tasks.filter(task => task.status === 'Done');
    }
  }
}
