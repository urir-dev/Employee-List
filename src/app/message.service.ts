import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  message: string;

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  show() {
    this.message = this.messages.toString();
  }

}
