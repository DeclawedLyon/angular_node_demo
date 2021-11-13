import { Component } from "@angular/core";
import { WebService } from "./web-service";

@Component({
  selector: 'new-message',
  template: `
    <mat-card class="message-card">
      <mat-card-content>
        <mat-form-field appearance="fill">
          <mat-label>Name</mat-label>
          <input matInput [(ngModel)]="message.user" placeholder="Enter your username here:">
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Select</mat-label>
          <mat-select>
            <mat-option value="one">First option</mat-option>
            <mat-option value="two">Second option</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Message</mat-label>
          <textarea matInput [(ngModel)]="message.text" placeholder="What's on your mind?"></textarea>
        </mat-form-field>
        <mat-card-actions>
          <button mat-button (click)="post()" color="primary">POST</button>
        </mat-card-actions>
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./messages.component.css']
})

export class NewMessageComponent {
  constructor(private webService : WebService) {}

  // user = "Peter Parker"
  message = {
    user: "",
    text: ""
  }

  post() {
    console.log("the current tweet is:", this.message.user, this.message.text)
  }
}
