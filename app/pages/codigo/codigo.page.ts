import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.page.html',
  styleUrls: ['./codigo.page.scss'],
})
export class CodigoPage implements OnInit {

  usuario = {
    email:''
  }
  handlerMessage='';
  roleMessage='';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
    header: 'IMPORTANTE',
    message: '¡El codigo debe ser de 6 digitos!',
    buttons: ['¡OK!']
    });
    await alert.present();
    }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
