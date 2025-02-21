import { Component, computed, effect, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { taskServices } from '../task.services';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  private taskServices = inject(taskServices);

  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.taskServices.allTask().filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.taskServices.allTask().filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.taskServices.allTask().filter((task) => task.status === 'DONE');
      default:
        return this.taskServices.allTask();
    }

  })

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
