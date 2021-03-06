
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
import { FooterComponent } from './components/footer/footer.component';
import { SubsectoresComponent } from './components/subsectores/subsectores.component';
import { Subsectores2Component } from './components/subsectores2/subsectores2.component';
import { Subsectores3Component } from './components/subsectores3/subsectores3.component';
import { StakeholderComponent } from './components/stakeholder/stakeholder.component';
import { Stakeholder2Component } from './components/stakeholder2/stakeholder2.component';
import { Stakeholder3Component } from './components/stakeholder3/stakeholder3.component';
import { InfoComponent } from './components/info/info.component';
import { Info2Component } from './components/info2/info2.component';
import { Info3Component } from './components/info3/info3.component';

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
  {path: 'footer',component: FooterComponent},
  {path: 'sub',component: SubsectoresComponent},
  {path: 'sub2',component: Subsectores2Component},
  {path: 'sub3',component: Subsectores3Component},
  {path: 'stake',component: StakeholderComponent},
  {path: 'stake2',component: Stakeholder2Component},
  {path: 'stake3',component: Stakeholder3Component},
  {path: 'info',component: InfoComponent},
  {path: 'info2',component: Info2Component},
  {path: 'info3',component: Info3Component},
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
    NavbarComponent,
    FooterComponent,
    SubsectoresComponent,
    Subsectores2Component,
    Subsectores3Component,
    StakeholderComponent,
    Stakeholder2Component,
    Stakeholder3Component,
    InfoComponent,
    Info2Component,
    Info3Component
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
