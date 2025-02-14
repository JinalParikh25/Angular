import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule, NgForm } from '@angular/forms';
import { newTicket } from './new-ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent,ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild('form') private form? :ElementRef<HTMLFormElement>;
  @Output() formSubmit = new EventEmitter();
  newTicket! : newTicket;

  onSubmit(titleInput:string, requestInput:string){
    this.newTicket = {
      title : titleInput,
      request : requestInput
    }
    this.formSubmit.emit(this.newTicket);
    this.form?.nativeElement.reset();
  }
}
