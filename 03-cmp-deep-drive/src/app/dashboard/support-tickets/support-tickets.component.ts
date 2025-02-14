import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { newTicket } from './new-ticket/new-ticket.model';
import { ticketModel } from './support-tickets.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent,TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {

  tickets : ticketModel[] = [];

  onFormSubmit(newTicket : newTicket){
    this.tickets.push({
      id:Math.random().toString(),
      title : newTicket.title,
      request : newTicket.request,
      status : 'open'
    });
  }
}
