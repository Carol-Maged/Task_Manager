import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router,NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { Task } from '../../model/model';
import { TaskList } from '../../components/task-list/task-list';
import { TaskService } from '../../services/TaskService';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskList],
  templateUrl: './tasks.html',
})
export class Tasks implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit() {

    this.loadTasks();

    this.router.events
      .pipe(

        filter(event =>
          event instanceof NavigationEnd
        )

      )
      .subscribe(() => {

        this.loadTasks();

      });

  }

  loadTasks() {

    this.taskService.getTasks().subscribe({

      next: (data) => {

        this.tasks = data;

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  onDelete(id: string) {

    this.taskService.deleteTask(id).subscribe({

      next: () => {

        this.loadTasks();

      }

    });

  }

  onDone(task: Task) {

    task.status = 'Done';

    this.taskService.updateTask(task).subscribe({

      next: () => {

        this.loadTasks();

      }

    });

  }

  onUpdate(task: Task) {

    this.router.navigate([
      '/edit-task',
      task.id
    ]);

  }

}


/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../model/model';
import { TaskList } from '../../components/task-list/task-list';
import { TaskService } from '../../services/TaskService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskList],
  templateUrl: './tasks.html',
})
export class Tasks implements OnInit {

  tasks: Task[] = [];

  constructor(
  private taskService: TaskService,
  private router: Router
) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.log(err)
    });
  }

  
  onDelete(id: string) {
    console.log("task deleted");
    this.taskService.deleteTask(id).subscribe({
      next: () => this.loadTasks()
    });
  }

  onDone(task: Task) {
    task.status = 'Done';

    this.taskService.updateTask(task).subscribe({
      next: () => this.loadTasks()
    });
  }

  onUpdate(task: Task) {

  this.router.navigate([
    '/edit-task',
    task.id
  ]);

}
}*/