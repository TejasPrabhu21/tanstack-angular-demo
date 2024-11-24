import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Todo } from '../../interfaces/todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private http = inject(HttpClient);

  getTodos(): Promise<Todo[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        lastValueFrom(
          this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        )
          .then(resolve)
          .catch(reject);
      }, 3000);
    });
  }

  addTodo(todo: Todo): Promise<Todo> {
    return lastValueFrom(
      this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
    );
  }
}
