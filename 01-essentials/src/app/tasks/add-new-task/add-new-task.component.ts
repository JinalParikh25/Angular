import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../tasks.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css'
})
export class AddNewTaskComponent {
  
  @Output() cancelClicked = new EventEmitter();
  @Output() submited = new EventEmitter<newTask>();
  

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  OnCancelClicked(){
    this.cancelClicked.emit();
  }

  formSubmit(){
    this.submited.emit({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      dueDate : this.enteredDueDate,
    });
  }
}
