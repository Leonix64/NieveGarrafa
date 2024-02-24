import { Component, OnInit } from '@angular/core';
import { RegisterService, UserData } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userdata: UserData = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    phone: ''
  };

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  register() {
    this.registerService.createUser(this.userdata).subscribe(
      response => {
        console.log('Usuario registrado exitosamente: ', response);
      },
      error => {
        console.error('Error al registrar usuario: ', error);
      }
    );
  }
}
