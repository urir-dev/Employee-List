import { Component } from '@angular/core';
import { User } from './user';
import { USERLIST } from './user-list';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private messageService: MessageService) { }

  title = 'Employee List';

  public userName: string;

  isLoggedIn: boolean;

  user: User[];

  public getInformation(userInput, passInput) {

    let userOfList: User;

    userOfList = (USERLIST.find(user => user.userName === userInput && user.passWord === passInput));
    if (userOfList !== undefined) {
      this.isLoggedIn = true;
      this.userName =  userOfList.userName;
      this.messageService.add(this.userName + ' Logged in successfully.' );
    }
    else {
      this.isLoggedIn = false;
    }
  }

}
