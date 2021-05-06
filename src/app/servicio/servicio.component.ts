import { Component} from '@angular/core';
import { BbddService } from './../bbdd.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {
  usuariosp:Observable<any[]>
  nombre:string
  cc:string
  correo:string
  constructor(private _servicio:BbddService) {
   this.usuariosp=_servicio.getlistadousuarios()
   }
  addusuario(){
    this._servicio.addusuario(
      this.cc,
      this.nombre,
      this.correo
    )
  }
  removeusuario(){
    this._servicio.removeusuario(this.nombre)
    }

   
  

}
