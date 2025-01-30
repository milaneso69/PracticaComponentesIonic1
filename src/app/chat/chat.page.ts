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
  },{
    username: 'Uziel',
    message: 'Saca el Brawl',
    date: '12:02',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Aaron',
    message: 'Weeeeee',
    date: '17:20',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Eleonor',
    message: 'Odio la vida',
    date: '23:12',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Fatima',
    message: 'Turip ip ip ip turip',
    date: '14:21',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Angel',
    message: 'Wazaaa',
    date: '8:12',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Kevin',
    message: 'Mary?',
    date: '11:02',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Perla',
    message: 'Perre',
    date: '13:12',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Gabo',
    message: 'Mañana voy a traer CupCakes',
    date: '17.23',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Ashley',
    message: 'Wacha',
    date: '15:23',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Arturo',
    message: 'Metete al minecraft',
    date: '5:45',
    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  },{
    username: 'Messi',
    message: 'El bogueto JIJIJIJIJ',
    date: '4:02',

    avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
