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

  @Input() user: string;
  @Input() password: string;


  constructor(
    private appComponent: AppComponent,

  ) { }

  ngOnInit(): void {

  }

  loginButton(): void {

    this.appComponent.getInformation(this.user, this.password); {

    }

  }


}
