import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { StartsideComponent } from './startside/startside.component';
import { StartsideKategoriComponent } from './startside-kategori/startside-kategori.component';
import { DetaljeretAnnonceComponent } from './detaljeret-annonce/detaljeret-annonce.component';
import { LogIndComponent } from './log-ind/log-ind.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartsideComponent,
    StartsideKategoriComponent,
    DetaljeretAnnonceComponent,
    LogIndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
