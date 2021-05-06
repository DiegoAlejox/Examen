import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
import {AngularFireDatabase} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class BbddService {

  constructor(private bd:AngularFireDatabase) { }
  public getlistadousuarios(){
    return this.bd.list('usuarios').valueChanges();
  }
  public addusuario(cc,nombre,correo){
    this.bd.database.ref('usuarios/'+nombre).set({
      cc:cc,
      nombre:nombre,
      correo:correo
    })
  }
  public removeusuario(nombre){
    this.bd.database.ref('usuarios/'+nombre).remove()
  }
}
