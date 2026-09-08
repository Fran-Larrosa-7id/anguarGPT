import { Component, signal } from '@angular/core';
import { ChatMessage } from '../../components/chat-bubbles/chatMessage/chatMessage';
import { MyMessage } from '../../components/chat-bubbles/myMessage/myMessage';
import { TypingLoader } from '../../components/typingLoader/typingLoader';
import { TextMessageBox } from '../../components/text-boxes/textMessageBox/textMessageBox';

@Component({
  selector: 'app-orthography-page',
  imports: [ChatMessage, MyMessage, TypingLoader, TextMessageBox],
  templateUrl: './orthographyPage.html',
})
export default class OrthographyPage {
  readonly messages = signal<string[]>([]);

  handleMessage(message: string): void {
    this.messages.update((messages) => [...messages, message]);
  }
}
