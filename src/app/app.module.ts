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
import { OpretAnnonceComponent } from './opret-annonce/opret-annonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import {AnnonceService} from './annonce/annonce.service';
import { GridComponent } from './grid/grid.component';
import {KategoriService} from './startside/kategorier/kategori.service';
import {AnnonceDataService} from './annonce/annonce-data.service';
import {GridService} from './grid/grid.service';
import { KategorierComponent } from './startside/kategorier/kategorier.component';
import {Annonce} from './annonce/annonce.model';
import {ResourceURLService} from './resourceURL.service';


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
    GridComponent,
    KategorierComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

  providers: [AnnonceService, KategoriService, AnnonceDataService, GridService, ResourceURLService],
  bootstrap: [AppComponent]
})
export class AppModule { }
