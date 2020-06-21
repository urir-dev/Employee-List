import { Component } from '@angular/core';
import { User } from './user';
import { USERLIST } from './user-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employee List';

  public userName: string;

  isLoggedIn: boolean;

  user: User[];

  getInformation(userInput: string, passInput: string) {

    let userOfList: User;

    userOfList = (USERLIST.find(user => user.userName === userInput || user.passWord === passInput));
    if (userOfList !== undefined) {
      this.isLoggedIn = true;
      this.userName =  userOfList.userName;
    }
    else {
      this.isLoggedIn = false;
    }
  }

}
