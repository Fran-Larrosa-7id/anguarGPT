import { Component, signal } from '@angular/core';
import { ChatMessage } from '../../components/chat-bubbles/chatMessage/chatMessage';
import { MyMessage } from '../../components/chat-bubbles/myMessage/myMessage';
import { TypingLoader } from '../../components/typingLoader/typingLoader';
import { TextMessageBox } from '../../components/text-boxes/textMessageBox/textMessageBox';
import {
  MessageWithFiles,
  TextMessageboxFile,
} from '../../components/text-boxes/textMessageboxFile/textMessageboxFile';

@Component({
  selector: 'app-orthography-page',
  imports: [ChatMessage, MyMessage, TypingLoader, TextMessageBox, TextMessageboxFile],
  templateUrl: './orthographyPage.html',
})
export default class OrthographyPage {
  readonly messages = signal<MessageWithFiles[]>([]);

  handleMessage(message: MessageWithFiles): void {
    this.messages.update((messages) => [...messages, message]);
    console.log('====??>>>', this.messages());
  }
}
