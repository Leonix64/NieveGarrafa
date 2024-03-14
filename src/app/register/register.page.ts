import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RegisterService, UserData } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userdata: UserData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    last_name: '',
    date_birth: '',
    phone: '',
  };

  constructor(
    private registerService: RegisterService,
    private toastController: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  register() {
    if (this.userdata.password != this.userdata.confirmPassword) {
      this.presentErrorToast('Las contraseñas no coinciden');
      return;
    }

    this.registerService.createUser(this.userdata).subscribe(
      () => {
        this.presentToast('Usuario registrado con exito');
      },
      (err) => {
        this.presentErrorToast('Error al registrar el usuario. Por favor intente de nuevo');
      }
    );
  }

  areFieldsValid(): boolean {
    // Verificar si todos los campos requeridos están llenos
    return (
      this.userdata.username.trim() !== '' &&
      this.userdata.email.trim() !== '' &&
      this.userdata.password.trim() !== '' &&
      this.userdata.confirmPassword.trim() !== '' &&
      this.userdata.name.trim() !== '' &&
      this.userdata.last_name.trim() !== '' &&
      this.userdata.date_birth.trim() !== '' &&
      this.userdata.phone.trim() !== ''
    );
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  private async presentErrorToast(message: string) {
    const toastError = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });
    toastError.present();
  }
}
