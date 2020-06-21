import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { AppComponent } from '../app.component';
import { USERLIST } from '../user-list';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.scss']
})
export class LoginscreenComponent implements OnInit {

  @Input() user: User;

  constructor(
    private appComponent: AppComponent,

  ) { }

  ngOnInit(): void {

  }

  loginButton(): void {

    this.appComponent.getInformation(this.user.userName, this.user.passWord); {

    }

  }


}
