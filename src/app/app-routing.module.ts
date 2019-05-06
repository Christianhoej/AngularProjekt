import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartsideComponent} from './startside/startside.component';
import { DetaljeretAnnonceComponent } from './annonce/detaljeret-annonce/detaljeret-annonce.component';

import {LogIndComponent} from './bruger/log-ind/log-ind.component';
import { OpretAnnonceComponent } from './opret-annonce/opret-annonce.component';
import {HttpClientModule} from '@angular/common/http';
import {OpretBrugerComponent} from './bruger/opret-bruger/opret-bruger.component';
import { AnnonceComponent } from './annonce/annonce.component';
import {AnnonceService} from './annonce/annonce.service';
import {MinSideComponent} from './bruger/min-side/min-side.component';
import {RedigerAnnonceComponent} from './annonce/rediger-annonce/rediger-annonce.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/startside', pathMatch: 'full'},
  {path: 'startside', component: StartsideComponent, children: [
      { path: '', component: StartsideComponent },
      { path: ':id', component: DetaljeretAnnonceComponent },
    ] },

  {path: 'detaljeret_annonce/:id', component: DetaljeretAnnonceComponent},
  {path: 'detaljeret_annonce', component: DetaljeretAnnonceComponent},

  {path: 'log_ind', component: LogIndComponent},
  {path: 'min_side', component: MinSideComponent},
  {path: 'rediger_annonce', component: RedigerAnnonceComponent},


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
