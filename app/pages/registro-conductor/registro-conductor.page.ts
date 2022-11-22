import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroCServiceService, Conductor } from 'src/app/services/registro-c-service.service';
import { ToastController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.page.html',
  styleUrls: ['./registro-conductor.page.scss'],
})
export class RegistroConductorPage implements OnInit {

  formularioRegistro: FormGroup;
  newConductor: Conductor = <Conductor>{};

  constructor(private registrocService: RegistroCServiceService,
              private alertController: AlertController, 
              private toastController: ToastController,
              private fb:FormBuilder) { 
                  this.formularioRegistro = this.fb.group({
                      'nombre': new FormControl("", Validators.required),
                      'correo': new FormControl("", Validators.required),
                      'password': new FormControl("", Validators.required),
                      'confirmaPass': new FormControl("", Validators.required),
                      'marcaauto': new FormControl("", Validators.required),
                      'modeloauto': new FormControl("", Validators.required)
            });
          }


  ngOnInit() {
  }

  async CrearConductor(){
    //console.log('Guardar');
   var form= this.formularioRegistro.value;
   if (this.formularioRegistro.invalid ){
       const alert = await this.alertController.create({
         header: 'Datos Incompletos',
         message: 'Debe completar todos los datos',
         buttons: ['Aceptar'],
       });
   
       await alert.present();
       return;
     }

     this.newConductor.nomConductor = form.nombre,
     this.newConductor.correoConductor = form.correo;
     if(form.password != form.confirmaPass)
     {
      this.formularioRegistro.invalid;
      const alerta = await this.alertController.create({
        header: 'Contraseña incorrecta',
        message: 'La contraseña debe ser la misma',
        buttons: ['Aceptar'],
      });
  
      await alerta.present();
      return;
        
      }
      else
      { 
        this.newConductor.passConductor=form.password, 
        this.newConductor.repassConductor=form.confirmaPass
      }

     this.newConductor.marcaVehiculo=form.marcaauto,
     this.newConductor.modeloVehiculo=form.modeloauto,
     this.registrocService.addDatos(this.newConductor).then(dato => { 
       this.newConductor = <Conductor>{};
       this.showToast('Registrado correctamente.');  
     }); 
 }

 async showToast(msg){
  const toast = await this.toastController.create({
    message: msg, 
    duration: 2000
  });
  toast.present();
}

}
