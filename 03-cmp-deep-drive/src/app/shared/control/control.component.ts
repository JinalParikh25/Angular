import { Component, Input } from '@angular/core';

@Component({
  selector: 'p[appControl]',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
  @Input({required:true}) labelText! : string;
}
