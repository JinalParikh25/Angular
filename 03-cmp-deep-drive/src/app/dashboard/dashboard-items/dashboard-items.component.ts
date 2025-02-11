import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-items',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-items.component.html',
  styleUrl: './dashboard-items.component.css'
})
export class DashboardItemsComponent {
  @Input({required:true}) img! : {src : string, alt : string};
  @Input({required:true}) title! : string;
}
