import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartsideComponent} from './startside/startside.component';
import {StartsideKategoriComponent} from './startside-kategori/startside-kategori.component';
import { DetaljeretAnnonceComponent } from './annonce/detaljeret-annonce/detaljeret-annonce.component';

import {LogIndComponent} from './bruger/log-ind/log-ind.component';
import { OpretAnnonceComponent } from './annonce/opret-annonce/opret-annonce.component';
import {HttpClientModule} from '@angular/common/http';
import {OpretBrugerComponent} from './bruger/opret-bruger/opret-bruger.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/startside', pathMatch: 'full'},
  {path: 'startside', component: StartsideComponent, children: [
      {path: ':id', component: DetaljeretAnnonceComponent},
    ]},
  {path: 'startside_kategori', component: StartsideKategoriComponent},
  {path: 'detaljeret_annonce', component: DetaljeretAnnonceComponent},
  {path: 'log_ind', component: LogIndComponent},
  {path: 'opret_annonce', component: OpretAnnonceComponent},
  {path: 'opret_bruger', component: OpretBrugerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
