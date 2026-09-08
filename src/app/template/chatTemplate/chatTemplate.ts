import { Component, inject, signal } from '@angular/core';
import { Message } from '../../interfaces/message.interface';
import { MessageWithFiles } from '../../presentation/components/text-boxes/textMessageboxFile/textMessageboxFile';
import { TextMessageBoxEvent } from '../../presentation/components/text-boxes/textMessageBoxSelect/textMessageBoxSelect';
import { OpenAIService } from '../../presentation/services/openai.service';
import { ChatMessage } from '../../presentation/components/chat-bubbles/chatMessage/chatMessage';
import { MyMessage } from '../../presentation/components/chat-bubbles/myMessage/myMessage';
import { TypingLoader } from '../../presentation/components/typingLoader/typingLoader';
import { TextMessageBox } from '../../presentation/components/text-boxes/textMessageBox/textMessageBox';

@Component({
  selector: 'app-chat-template',
  imports: [ChatMessage, MyMessage, TypingLoader, TextMessageBox],
  templateUrl: './chatTemplate.html',
})
export class ChatTemplate {
  public openAiService = inject(OpenAIService);
  public isLoading = signal(false);
  public messages = signal<Message[]>([{ text: 'Hola, ¿cómo estás?', isGpt: true }]);
  readonly messagesWithSelect = signal<TextMessageBoxEvent[]>([]);
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
    this.messages.update((messages) => [...messages, { text: message, isGpt: false }]);
  }

  handleMessageWithSelect(event: TextMessageBoxEvent): void {
    this.messagesWithSelect.update((messages) => [...messages, event]);
    console.log('SELECT->', this.messagesWithSelect());
    this.messagesWithSelect.set([]);
  }
}
