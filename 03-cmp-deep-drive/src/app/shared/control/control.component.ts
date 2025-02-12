import { Component, ElementRef, inject, Input } from '@angular/core';

@Component({
  selector: 'p[appControl]',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host:{
    '(click)':"onClicked()"
  }
})
export class ControlComponent {
  @Input({required:true}) labelText! : string;

  private el = inject(ElementRef);
  onClicked(){
    console.log("control element is clicked");
    console.log(this.el);
  }
}
