import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string;
  password: string;

  constructor(private router: Router, private alertController: AlertController) { }

  login() {
    if (this.username === 'admin' && this.password === 'password') {
      // Successful login
      this.router.navigateByUrl('/register');
    } else {
      // Invalid credentials, show an error message
      this.presentAlert('Invalid Credentials', 'Please enter valid username and password.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
