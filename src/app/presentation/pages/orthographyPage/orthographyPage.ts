import { Component, signal } from '@angular/core';
import { ChatMessage } from '../../components/chat-bubbles/chatMessage/chatMessage';
import { MyMessage } from '../../components/chat-bubbles/myMessage/myMessage';
import { TypingLoader } from '../../components/typingLoader/typingLoader';
import { TextMessageBox } from '../../components/text-boxes/textMessageBox/textMessageBox';
import {
  MessageWithFiles,
  TextMessageboxFile,
} from '../../components/text-boxes/textMessageboxFile/textMessageboxFile';
import {
  TextMessageBoxEvent,
  TextMessageBoxSelect,
} from '../../components/text-boxes/textMessageBoxSelect/textMessageBoxSelect';

@Component({
  selector: 'app-orthography-page',
  imports: [
    ChatMessage,
    MyMessage,
    TypingLoader,
    TextMessageBox,
    TextMessageboxFile,
    TextMessageBoxSelect,
  ],
  templateUrl: './orthographyPage.html',
})
export default class OrthographyPage {
  readonly messages = signal<string[]>([]);
  readonly messagesWithFiles = signal<MessageWithFiles[]>([]);
  readonly options = signal([
    { id: '1', txt: 'Opción 1' },
    { id: '2', txt: 'Opción 2' },
    { id: '3', txt: 'Opción 3' },
  ]);
  handleMessageWithFile(message: MessageWithFiles): void {
    this.messagesWithFiles.update((messages) => [...messages, message]);
    console.log('====??>>>', this.messagesWithFiles());
  }

  handleMessage(message: string): void {
    this.messages.update((messages) => [...messages, message]);
  }

  handleMessageWithSelect(event: TextMessageBoxEvent): void {
    this.messages.update((messages) => [...messages, event.message]);
  }
}
