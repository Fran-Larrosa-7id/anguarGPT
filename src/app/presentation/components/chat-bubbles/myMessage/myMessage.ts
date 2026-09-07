import { Component, input } from '@angular/core';

@Component({
  selector: 'app-my-message',
  imports: [],
  templateUrl: './myMessage.html',
})
export class MyMessage {
  text = input.required<string>();
}
