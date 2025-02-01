import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-essentials';
  selectedUser? : User;

  users = DUMMY_USERS;

  onUserSelected(user:User){
      this.selectedUser =  user;
  }
}
