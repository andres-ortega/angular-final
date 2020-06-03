
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms"

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { CapitalhumanoComponent } from './components/capitalhumano/capitalhumano.component';
import { CapitalrelacionalComponent } from './components/capitalrelacional/capitalrelacional.component';
import { PaginaprincipalComponent } from './components/paginaprincipal/paginaprincipal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InformacionsectoresComponent } from './components/informacionsectores/informacionsectores.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Auth service
import { AuthService } from "./services/authentication.service";



const routes:Route[]=[
{path: 'login',component: LoginComponent},
  {path: 'quienessomos',component: QuienessomosComponent},
  {path: 'capitalhumano',component: CapitalhumanoComponent},
  {path: 'capitalrelacional',component: CapitalrelacionalComponent},
  {path: 'sectores',component: InformacionsectoresComponent},
  {path: 'paginaprincipal',component: PaginaprincipalComponent},
  {path: 'registro',component: RegistroComponent},
  {path: 'navbar',component: NavbarComponent},
  {path: '', component: LoginComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '/', pathMatch: 'full'  },
  

];
export const routing = RouterModule.forRoot(routes);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuienessomosComponent,
    CapitalhumanoComponent,
    CapitalrelacionalComponent,
    PaginaprincipalComponent,
    RegistroComponent,
    InformacionsectoresComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  
  providers: [AppComponent, AuthService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
