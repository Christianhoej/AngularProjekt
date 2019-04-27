import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { StartsideComponent } from './startside/startside.component';
import { StartsideKategoriComponent } from './startside-kategori/startside-kategori.component';

import { LogIndComponent } from './bruger/log-ind/log-ind.component';

import { OpretBrugerComponent } from './bruger/opret-bruger/opret-bruger.component';

import { DetaljeretAnnonceComponent } from './annonce/detaljeret-annonce/detaljeret-annonce.component';

import { OpretAnnonceComponent } from './annonce/opret-annonce/opret-annonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import {AnnonceService} from './annonce/annonce.service';
import { GridComponent } from './grid/grid.component';
import { StartsideKategoriValgtComponent } from './startside-kategori/startside-kategori-valgt/startside-kategori-valgt.component';
import { StartsideTestComponent } from './startside-kategori/startside-test/startside-test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartsideComponent,
    StartsideKategoriComponent,
    DetaljeretAnnonceComponent,
    LogIndComponent,
    OpretAnnonceComponent,
    OpretBrugerComponent,
    StartsideKategoriValgtComponent,
    StartsideTestComponent,
    AnnonceComponent,
    GridComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AnnonceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
