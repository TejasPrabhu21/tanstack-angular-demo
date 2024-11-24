import { Component, inject } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { TodoService } from '../../services/todos/todo-service.service';
import { QueryClient } from '@tanstack/angular-query-experimental';
import { Todo } from '../../interfaces/todo';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [ReactiveFormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todoService = inject(TodoService);
  queryClient = inject(QueryClient);

  placeholders = new Array(20);

  form = new FormGroup({
    title: new FormControl('title', Validators.maxLength(5)),
  });

  todos = injectQuery(() => ({
    queryKey: ['todos', 5, { preview: true }],
    queryFn: () => this.todoService.getTodos(),
  }));

  mutation = injectMutation(() => ({
    mutationFn: (todo: Todo) => this.todoService.addTodo(todo),
    onSuccess: () => {
      this.queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  }));

  onAddTodo() {
    this.mutation.mutate({
      id: Date.now().toString(),
      title: 'Do Laundry',
    });
  }
}
