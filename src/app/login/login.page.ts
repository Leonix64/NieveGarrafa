import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('Nombre de usuario: ' + this.username);
    console.log('Contraseña: ' + this.password);
  }

}
