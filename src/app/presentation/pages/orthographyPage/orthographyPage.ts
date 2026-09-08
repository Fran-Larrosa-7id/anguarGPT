import { Component } from '@angular/core';
import { ChatMessage } from '../../components/chat-bubbles/chatMessage/chatMessage';
import { MyMessage } from '../../components/chat-bubbles/myMessage/myMessage';
import { TypingLoader } from '../../components/typingLoader/typingLoader';

@Component({
  selector: 'app-orthography-page',
  imports: [ChatMessage, MyMessage, TypingLoader],
  templateUrl: './orthographyPage.html',
})
export default class OrthographyPage {}
