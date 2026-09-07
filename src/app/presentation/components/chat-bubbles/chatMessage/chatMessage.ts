import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  imports: [],
  templateUrl: './chatMessage.html',
})
export class ChatMessage {
  text = input.required<string>();
}
