import { Component, Input } from '@angular/core';
import { ticketModel } from '../support-tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input() ticket! : ticketModel;
  isTicketVisible = false;
  isTicketClosed = 'open';

  oncollapseButtonClicked(){
    this.isTicketVisible = !this.isTicketVisible;
  }

  onCloseTicketClicked(){
    this.isTicketClosed = 'close';
    this.ticket.status = 'closed';
  }
}
