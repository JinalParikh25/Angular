import { Component } from '@angular/core';
import { RectComponent } from './rect/rect.component';
import { FormsModule } from '@angular/forms';
import { reactModel } from './rect/rect.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RectComponent, FormsModule],
})
export class AppComponent {

  rectSize : reactModel =  {
    width: '100',
    height: '100',
  };
}
