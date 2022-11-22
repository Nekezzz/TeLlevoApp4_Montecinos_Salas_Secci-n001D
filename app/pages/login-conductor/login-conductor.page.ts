import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroCServiceService, Conductor } from 'src/app/services/registro-c-service.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-login-conductor',
  templateUrl: './login-conductor.page.html',
  styleUrls: ['./login-conductor.page.scss'],
})
export class LoginConductorPage implements OnInit {
  formularioLoginc : FormGroup;
  conductores : Conductor[] = []; 

  constructor( private alertController: AlertController, 
               private navController: NavController, 
               private toastController: ToastController,
               private registroCService: RegistroCServiceService,
               private fb: FormBuilder) {
                  this.formularioLoginc = this.fb.group({ 
                    'correo': new FormControl("", Validators.required),
                    'password': new FormControl("", Validators.required),
                  })
                }
              
  ngOnInit() {
  }


  async Ingresar(){
    var f = this.formularioLoginc.value;
    var a = 0;
    this.registroCService.getConductores().then(datos=>{
      this.conductores=datos;
      if (datos.length==0)
      {
          return null;
      }

      for (let obj of this.conductores){
        if (obj.correoConductor == f.correo && obj.passConductor==f.password){
            a=1;
            console.log('ingresado');
            localStorage.setItem('ingresado', 'true');
            this.showToast('Bienvenido: ' + obj.nomConductor + '. ¡Te damos las gracias por logearte con nosotros! ');  
            this.navController.navigateRoot('inicio');
        }
      }
    console.log(a);
    if (a==0){
      this.alertMsg();
    }
  });   
 }

 async alertMsg(){
  const alert = await this.alertController.create({
    header: 'Error..',
    message:'!Los datos ingresados no son correctos',
    buttons: ['Aceptar'],
  });
    await alert.present();
    return;
  }
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }



}
