import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';


  constructor() { 

  }
  ngOnInit() {
  }

  login(){
    //Si usuario=admin y password=admin
    //entonces console.log("login correcto");
    //Si no console.log("login incorrecto");

    if(this.email === 'admin' && this.password === 'admin'){
      console.log("login correcto");
    } else {
      console.log("login incorrecto");
    }
   
  }
}
