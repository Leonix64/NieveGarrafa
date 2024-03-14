import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService, UserData } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData: UserData = {
    username: '',
    password: ''
  };

  token = '';

  constructor(
    private loginService: LoginService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.loginUser(this.userData.username, this.userData.password).subscribe(
      (response) => {
        this.token = response.token;
        this.loginService.setToken(this.token);
        console.log('Token: ' + this.token);

        this.presentToast('Inicio de sesión exitoso');
        
        this.router.navigate(['/home']);
      },
      (err) => {
        this.presentErrorToast('Error al ingresar los datos');
      }
    );
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  private async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
      color: 'danger'
    });
    toast.present();
  }
}
