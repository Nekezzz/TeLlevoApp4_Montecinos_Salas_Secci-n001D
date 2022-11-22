import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [

    {
      icon: 'eye-outline',
      name: 'Noticias',
      redirecTo:'/noticias',
    },
    {
      icon: 'car-sport-outline', 
      name: 'Conductores', 
      redirecTo: '/conductores'
    },
    {
      icon: 'accessibility-outline', 
      name: 'Inicio', 
      redirecTo: '/inicio'
    },
    {
      icon: 'person-outline', 
      name: 'Usuarios', 
      redirecTo: '/usuarios'
    },
    

    
    
  ];
  



}
