

import { Injectable } from '@angular/core';
import{Sector} from '../modelo/sector'
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  SelectedSector: Sector = new Sector();
  SectorList: AngularFireList<any>;


  constructor(private firebase: AngularFireDatabase) { }
  getPersona(){
    return this.SectorList = this.firebase.list('sector');
  }
  insertPersona(sector: Sector){
    this.SectorList.push({
      nombre: sector.nombre
    });
  }

  updatePersona(sector: Sector){
    this.SectorList.update(sector.$keySector,{
      nombre:sector.nombre
    });
  }

  
  deleteSector($keySector:string){
  this.SectorList.remove($keySector);
  }


}
