import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';


  constructor(private navController: NavController) { 
  } 

  ngOnInit() {
  }

  login(form: NgForm){

    //obtener los valores del formulario creando objeto
    console.log(form.value);

    //Validar formulario
    console.log('valid', form.valid);

    

    //si form es invalido
    //console log('todos los campos son requeridos)
    //return
    if (form.invalid){
      console.log('Todos los campos son requeridos');
      return;
    }



    //Si usuario=admin y password=admin
    //entonces console.log("login correcto");
    //Si no console.log("login incorrecto");

    if(this.email === 'admin' && this.password === 'admin'){
      this.navController.navigateForward('/inicio');
    } else {
      console.log("login incorrecto");
    }
   
  }
}
