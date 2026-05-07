import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/model';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';
  tasks = signal<Task[]>([]);

  constructor(private http: HttpClient) {}

  addTask(task: Task) {
    return this.http.post<Task>(this.apiUrl, task);
  }

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }

   updateTask(task: Task) {
    return this.http.put<Task>(
      `${this.apiUrl}/${task.id}`,
      task
    );
  }

  deleteTask(id: string) {
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }

  getTaskById(id: string) {
  return this.http.get<Task>(
    `${this.apiUrl}/${id}`
  );
}

}