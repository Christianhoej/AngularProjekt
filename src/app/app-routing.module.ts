import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartsideComponent} from './startside/startside.component';
import { DetaljeretAnnonceComponent } from './annonce/detaljeret-annonce/detaljeret-annonce.component';

import {LogIndComponent} from './bruger/log-ind/log-ind.component';
import { OpretAnnonceComponent } from './annonce/opret-annonce/opret-annonce.component';
import {HttpClientModule} from '@angular/common/http';
import {OpretBrugerComponent} from './bruger/opret-bruger/opret-bruger.component';
import { AnnonceComponent } from './annonce/annonce.component';
import {AnnonceService} from './annonce/annonce.service';
import {MinSideComponent} from './bruger/min-side/min-side.component';
import {RedigerAnnonceComponent} from './annonce/rediger-annonce/rediger-annonce.component';
import {AuthGuard} from './auth-guard.service';
import {AnnonceListResolver} from './annonce/annonce-list-resolver.service';
import {RedigerBrugerComponent} from './bruger/rediger-bruger/rediger-bruger.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/startside', pathMatch: 'full'},
  {path: 'startside', component: StartsideComponent, /*resolve: {annoncer: AnnonceListResolver},*/ children: [
      { path: '', component: StartsideComponent },
      { path: ':id', component: StartsideComponent },
    ] },
  {path: 'detaljeret_annonce/:id', component: DetaljeretAnnonceComponent},
  {path: 'log_ind', component: LogIndComponent},
  {path: 'min_side/:userID', component: MinSideComponent, canActivate: [AuthGuard]},
  {path: 'min_side/:userID/rediger', component: RedigerBrugerComponent, canActivate: [AuthGuard]},
  {path: 'rediger_annonce/:id', component: RedigerAnnonceComponent, canActivate: [AuthGuard]},
  {path: 'opret_annonce',  component: OpretAnnonceComponent, canActivate: [AuthGuard]},
  {path: 'opret_bruger', component: OpretBrugerComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

// , canActivate: [AuthGuard] --> i min side

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

