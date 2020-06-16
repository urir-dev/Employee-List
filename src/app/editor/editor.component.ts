import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {

  @Input() input: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.messageService.show();
    this.input = this.messageService.message;
  }

  onSubmit(): void {

    this.messageService.clear();
    this.messageService.add(this.input);

  }


}
