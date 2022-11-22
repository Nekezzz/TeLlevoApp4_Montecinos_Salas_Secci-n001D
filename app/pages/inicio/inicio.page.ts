import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(private menuController: MenuController, private navController: NavController ) { }


  ngOnInit() {
   

  }

  Logout(){
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('principal');
  }

  
  mostrarMenu(){
    this.menuController.open('first');
  }



}

