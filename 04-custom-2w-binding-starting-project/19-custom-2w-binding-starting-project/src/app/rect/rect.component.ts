import { Component, EventEmitter, Input, Output } from '@angular/core';
import { reactModel } from './rect.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  @Input({required:true}) Size! : reactModel;
  @Output() SizeChange = new EventEmitter<reactModel>();

  onReset() {
    this.SizeChange.emit({
      width :'200',
      height : '100'
    })
  }
}
