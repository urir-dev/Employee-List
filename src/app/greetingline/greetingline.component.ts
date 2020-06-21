import { Component, OnInit, Input, Output} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-greetingline',
  templateUrl: './greetingline.component.html',
  styleUrls: ['./greetingline.component.scss']
})
export class GreetinglineComponent implements OnInit {

  constructor(private appComponent: AppComponent,
    ) {
  }

  @Output() line = 'Hello ' + this.appComponent.userName;

  ngOnInit(): void {
  }

}
