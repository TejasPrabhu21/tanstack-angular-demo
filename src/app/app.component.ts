import { Component } from '@angular/core';
import { TodosComponent } from './components/todos/todos.component';
import { InfiniteQueryComponent } from './components/infinite-query/infinite-query.component';

@Component({
  selector: 'app-root',
  imports: [TodosComponent, InfiniteQueryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tanstack-angular-demo';
}
