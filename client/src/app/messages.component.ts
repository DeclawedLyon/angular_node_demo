import { Component } from "@angular/core";
import { WebService } from "./web-service";

@Component({
  selector: 'messages',
  template: `
  <div *ngFor="let message of messages">
    <mat-card class="message-card">
          {{message.user}}
      <mat-card-content>
        {{message.text}}
      </mat-card-content>
    </mat-card>
  </div>
  `,
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent {
  constructor(private webService : WebService) {}

  async ngOnInit() {
    const response = await this.webService.getMessages();
    this.messages = response
    // console.log("the response is: ", response)
  }
  messages: any = [];
}
