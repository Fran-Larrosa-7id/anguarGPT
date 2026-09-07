import { Component } from '@angular/core';
import { ChatMessage } from '../../components/chat-bubbles/chatMessage/chatMessage';
import { MyMessage } from '../../components/chat-bubbles/myMessage/myMessage';

@Component({
  selector: 'app-orthography-page',
  imports: [ChatMessage, MyMessage],
  templateUrl: './orthographyPage.html',
})
export default class OrthographyPage {}
