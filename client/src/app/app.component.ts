import { Component } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';

@Component({
  selector: 'app-root',
  template: `
  <h1>Message Board {{title}}<h1>
  <new-message (onPosted)="onPosted($event)"></new-message>
  <messages></messages>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onPosted(message: any) {
    //this onPosted function receives data from the event emitter on new-message.component.ts
    console.log("posted:", message)
  }
  title = 'my front-end client';
}
