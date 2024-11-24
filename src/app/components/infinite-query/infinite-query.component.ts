import { Component, computed, inject } from '@angular/core';
import { injectInfiniteQuery } from '@tanstack/angular-query-experimental';
import { ProjectsService } from '../../services/projects/projects.service';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-infinite-query',
  templateUrl: './infinite-query.component.html',
  styleUrls: ['./infinite-query.component.css'],
})
export class InfiniteQueryComponent {
  projectsService = inject(ProjectsService);

  query = injectInfiniteQuery(() => ({
    queryKey: ['projects'],
    queryFn: ({ pageParam = 0 }) => this.projectsService.getProjects(pageParam),
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) =>
      firstPage.length > 0 ? Number(firstPage[0].id) - 1 : undefined,
    getNextPageParam: (lastPage) =>
      lastPage.length > 0
        ? Number(lastPage[lastPage.length - 1].id)
        : undefined,
  }));

  nextButtonDisabled = computed(
    () => !this.query.hasNextPage || this.query.isFetchingNextPage
  );

  nextButtonText = computed(() =>
    this.query.isFetchingNextPage()
      ? 'Loading more...'
      : this.query.hasNextPage()
      ? 'Load more'
      : 'Nothing more to load'
  );
}
