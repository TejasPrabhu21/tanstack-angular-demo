import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Todo } from '../../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  http = inject(HttpClient);

  async getProjects(pageParam: number): Promise<Todo[]> {
    const todos = await lastValueFrom(
      this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    );

    console.log(pageParam);

    const pageSize = 10;
    const start = pageParam;
    console.log(start);
    return todos.slice(start, start + pageSize);
  }
}
