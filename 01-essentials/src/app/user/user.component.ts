import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user.model';

const random_Index = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required : true}) user! : User;
  @Output() selected = new EventEmitter();
  
  get imagePath() {
    return "./users/" + this.user.avatar;
  }

  onUserClicked(){
    this.selected.emit(this.user);
  }
}
