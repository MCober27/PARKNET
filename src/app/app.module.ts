import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {app_routing} from './app.routes';
import {Auth} from './servicios/auth.service'
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home/home.component';
import { WebMapComponent } from './components/web-map/web-map.component';
import { PoliticaCookiesComponent } from './components/politica-cookies/politica-cookies.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    WebMapComponent,
    PoliticaCookiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing,
    CookieModule.forRoot()
  ],
  providers: [
    Auth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
