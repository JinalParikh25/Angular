import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SupportTicketsComponent } from './dashboard/support-tickets/support-tickets.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { DashboardItemsComponent } from "./dashboard/dashboard-items/dashboard-items.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,DashboardItemsComponent, SupportTicketsComponent, TrafficComponent, ServerStatusComponent, DashboardItemsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  get dashboardItems() { 
    return [ {
      img : { src: 'status.png', alt: 'A signal symbol' },
      title : "Server Status",
      componentName : "app-server-status"
    },
    {
      img : { src: 'globe.png', alt: 'A globe' },
      title : "Traffic",
      componentName : "app-traffic"
    },
    {
      img : { src: 'list.png', alt: 'A list of items' },
      title : "Support Tickets",
      componentName : "app-support-tickets"
    }
  ]
  }
}