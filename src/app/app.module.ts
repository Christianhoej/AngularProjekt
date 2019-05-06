import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { StartsideComponent } from './startside/startside.component';
import { LogIndComponent } from './bruger/log-ind/log-ind.component';
import { OpretBrugerComponent } from './bruger/opret-bruger/opret-bruger.component';
import { DetaljeretAnnonceComponent } from './annonce/detaljeret-annonce/detaljeret-annonce.component';
import { OpretAnnonceComponent } from './bruger/opret-annonce/opret-annonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import {AnnonceService} from './annonce/annonce.service';
import {KategoriService} from './startside/kategorier/kategori.service';
import {AnnonceDataService} from './annonce/annonce-data.service';
import { KategorierComponent } from './startside/kategorier/kategorier.component';
import {ResourceURLService} from './resourceURL.service';
import { MinSideComponent } from './bruger/min-side/min-side.component';
import { RedigerAnnonceComponent } from './annonce/rediger-annonce/rediger-annonce.component';
import {BrugerService} from './bruger/services/bruger.service';
import {AuthGuard} from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartsideComponent,
    DetaljeretAnnonceComponent,
    LogIndComponent,
    OpretAnnonceComponent,
    OpretBrugerComponent,
    AnnonceComponent,
    KategorierComponent,
    MinSideComponent,
    RedigerAnnonceComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

  providers: [AnnonceService, KategoriService, AnnonceDataService, ResourceURLService, BrugerService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
