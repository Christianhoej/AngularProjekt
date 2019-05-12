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
import { OpretAnnonceComponent } from './annonce/opret-annonce/opret-annonce.component';
import {AnnonceService} from './annonce/services/annonce.service';
import {KategoriService} from './startside/kategori/kategori.service';
import { KategoriComponent } from './startside/kategori/kategori.component';
import {ResourceURLService} from './resourceURL.service';
import { MinSideComponent } from './bruger/min-side/min-side.component';
import { RedigerAnnonceComponent } from './annonce/rediger-annonce/rediger-annonce.component';
import {BrugerService} from './bruger/services/bruger.service';
import {AuthGuard} from './auth-guard.service';
import { MineAnnoncerComponent } from './annonce/mine-annoncer/mine-annoncer.component';
import {AnnonceListResolver} from './annonce/services/annonce-list-resolver.service';
import { RedigerBrugerComponent } from './bruger/rediger-bruger/rediger-bruger.component';
import { FooterComponent } from './footer/footer.component';
import {AnnonceResolver} from './annonce/services/annonce-resolver.service';
import {AnnonceComponent} from './annonce/annonce.component';


// @ts-ignore
// @ts-ignore
// @ts-ignore
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
    KategoriComponent,
    MinSideComponent,
    RedigerAnnonceComponent,
    MineAnnoncerComponent,
    RedigerBrugerComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],

  providers: [AnnonceService, KategoriService, ResourceURLService, BrugerService, AuthGuard, AnnonceListResolver, AnnonceResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
