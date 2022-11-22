import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistroserviceService, Usuario } from 'src/app/services/registroservice.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  datos: Usuario[] = [];
  newDato: Usuario = <Usuario>{};
  @ViewChild('myList')myList :IonList;

  constructor(private storageService: RegistroserviceService,
    private plt: Platform, private toastController: ToastController) {
      this.plt.ready().then(()=>{
        this.loadDatos();
      })
     }

  ngOnInit() {
  }

  //get
  loadDatos(){
    this.storageService.getUsuarios().then(datos=>{
      this.datos=datos;
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

