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

import { DetaljeretAnnonceComponent } from './detaljeret-annonce/detaljeret-annonce.component';

import { OpretAnnonceComponent } from './opret-annonce/opret-annonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import {AnnonceService} from './annonce/annonce.service';
import { StartsideKategoriValgtComponent } from './startside-kategori/startside-kategori-valgt/startside-kategori-valgt.component';
import { StartsideTestComponent } from './startside-kategori/startside-test/startside-test.component';
import { GridComponent } from './grid/grid.component';
import {AnnoncetestService} from './startside-kategori/annoncetest.service';
import {KategoriService} from './startside/kategorier/kategori.service';
import {AnnonceDataService} from './annonce-data.service';
import {GridService} from './grid/grid.service';
import {MaterialeService} from './startside-kategori/materiale.service';
import {FirebaseError} from 'firebase';
import {UploadBilleder} from './annonce/Shared/upload-billeder';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { KategorierComponent } from './startside/kategorier/kategorier.component';


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
    AnnonceComponent,
    StartsideKategoriValgtComponent,
    StartsideTestComponent,
    AnnonceComponent,
    GridComponent,
    KategorierComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],

  providers: [AnnonceService, AnnoncetestService, KategoriService, AnnonceDataService, GridService, MaterialeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
