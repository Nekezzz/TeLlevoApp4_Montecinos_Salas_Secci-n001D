import { Injectable } from '@angular/core';
import { Storage }  from '@ionic/storage';

export interface Conductor{
  nomConductor: string; 
  correoConductor: string; 
  passConductor: string;
  repassConductor: string;
  modeloVehiculo: string;
  marcaVehiculo: string;
  asientos: string;
}
const USERS_KEY = 'my-conductores';


@Injectable({
  providedIn: 'root'
})
export class RegistroCServiceService {
  private _storage: Storage
  newConductor: Conductor = <Conductor>{};

  constructor(private storage: Storage) {
    this.init();
   }

   async init(){
    const storage = await this.storage.create();
    this._storage= storage;
  }


  async addDatos(dato: Conductor):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos : Conductor[])=>{
       if (datos) {
         datos.push(dato);
         return this.storage.set(USERS_KEY, datos);
       }else {
         return this.storage.set(USERS_KEY, [dato]);
       }
 
     })
  }

  async getConductores(): Promise<Conductor[]>{
    return this.storage.get(USERS_KEY);
  }




}

