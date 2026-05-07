import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskInput } from '../../components/task-input/task-input';
import { TaskService } from '../../services/TaskService';
import { Task } from '../../model/model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [TaskInput],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask implements OnInit {

  isEditMode = false;

  taskId = '';

  task!: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.isEditMode = true;

      this.taskId = id;

      this.taskService
        .getTaskById(id)
        .subscribe({

          next: (task) => {

            this.task = task;

          },

          error: (err) => {

            console.log(err);

          }

        });

    }

  }

  handleAddTask(task: Task) {

    // EDIT MODE
    if (this.isEditMode) {

      task.id = this.taskId;

      this.taskService
        .updateTask(task)
        .subscribe({

          next: () => {

            console.log('Task updated');

            this.router.navigate(['/tasks']);

          },

          error: (err) => {

            console.log(err);

          }

        });

    }

    // ADD MODE
    else {

      this.taskService
        .addTask(task)
        .subscribe({

          next: (res) => {

            console.log('Task added:', res);

            this.router.navigate(['/tasks']);

          },

          error: (err) => {

            console.error('Error adding task:', err);

          }

        });

    }

  }

}