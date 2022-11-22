import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistroCServiceService, Conductor } from 'src/app/services/registro-c-service.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.page.html',
  styleUrls: ['./conductores.page.scss'],
})
export class ConductoresPage implements OnInit {
  datos: Conductor[] = [];
  newDato: Conductor = <Conductor>{};
  @ViewChild('myList')myList :IonList;

  constructor(private storageService: RegistroCServiceService,
    private plt: Platform, private toastController: ToastController) {
      this.plt.ready().then(()=>{
        this.loadDatos();
      })
     }

  ngOnInit() {
  }

  //get
  loadDatos(){
    this.storageService.getConductores().then(datos=>{
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

