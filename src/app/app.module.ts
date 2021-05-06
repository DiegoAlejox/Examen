import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BbddService} from './bbdd.service';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ServicioComponent } from './servicio/servicio.component';
import{AngularFireModule} from '@angular/fire';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AgregarUsuarioComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'servicio', component: ServicioComponent},
    ]),
  ],
  providers: [BbddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
