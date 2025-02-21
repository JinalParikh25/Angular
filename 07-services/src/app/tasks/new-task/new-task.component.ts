import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { taskServices } from '../task.services';
import { Task } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private taskServices = inject(taskServices);
  private taskModel!: Task;

  onAddTask(title: string, description: string) {
    
    this.taskServices.addTask({
      id : Math.random().toString(),
      title : title,
      description : description,
      status : 'OPEN',
    });

    this.formEl()?.nativeElement.reset();
  }
}
