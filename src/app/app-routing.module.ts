import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartsideComponent} from './startside/startside.component';
import {StartsideKategoriComponent} from './startside-kategori/startside-kategori.component';
import { DetaljeretAnnonceComponent } from './annonce/detaljeret-annonce/detaljeret-annonce.component';

import {LogIndComponent} from './bruger/log-ind/log-ind.component';
import { OpretAnnonceComponent } from './opret-annonce/opret-annonce.component';
import {HttpClientModule} from '@angular/common/http';
import {OpretBrugerComponent} from './bruger/opret-bruger/opret-bruger.component';
import { AnnonceComponent } from './annonce/annonce.component';
import {AnnonceService} from './annonce/annonce.service';


const appRoutes: Routes = [
  {path: '', redirectTo: '/startside', pathMatch: 'full'},
  {path: 'startside', component: StartsideComponent, children: [
      { path: '', component: StartsideComponent },
      { path: ':id', component: StartsideComponent },
      { path: 'nips', component: StartsideComponent },
      { path: 'møbler', component: StartsideComponent },
      { path: 'til-køkkenet', component: StartsideComponent },
      { path: 'tøj', component: StartsideComponent },
      { path: 'kunst', component: StartsideComponent },
      { path: 'til-børn', component: StartsideComponent },
      { path: 'andet', component: StartsideComponent }
    ] },
  {path: 'startside_kategori', component: StartsideKategoriComponent},
  {path: 'detaljeret_annonce', component: DetaljeretAnnonceComponent},
  {path: 'detaljeret_annonce/:id', component: DetaljeretAnnonceComponent},
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
