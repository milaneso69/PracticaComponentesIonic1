import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: false,
})
export class ChatPage implements OnInit {

  chat: any[] = [{
    username: 'Alejandro',
    message: 'Holaaa como estas',
    date: '11.23',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Maria',
    message: 'Encantada de conocerte',
    date: '12.23',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Jose',
    message: 'xd',
    date: '13.23',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Zahid',
    message: 'Gracias por conocerme',
    date: '14.23',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
