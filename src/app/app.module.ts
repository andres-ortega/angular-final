
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { CapitalhumanoComponent } from './capitalhumano/capitalhumano.component';
import { CapitalrelacionalComponent } from './capitalrelacional/capitalrelacional.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { RegistroComponent } from './registro/registro.component';

const routes:Route[]=[
{path: 'login',component: LoginComponent},
  {path: 'quienessomos',component: QuienessomosComponent},
  {path: 'capitalhumano',component: CapitalhumanoComponent},
  {path: 'capitalrelacional',component: CapitalrelacionalComponent},
  {path: 'paginaprincipal',component: PaginaprincipalComponent},
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full'  },
  {path: 'componente',component: RegistroComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuienessomosComponent,
    CapitalhumanoComponent,
    CapitalrelacionalComponent,
    PaginaprincipalComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
