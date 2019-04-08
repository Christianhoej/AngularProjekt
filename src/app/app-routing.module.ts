import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartsideComponent} from './startside/startside.component';
import {StartsideKategoriComponent} from './startside-kategori/startside-kategori.component';
import {DetaljeretAnnonceComponent} from './detaljeret-annonce/detaljeret-annonce.component';
import {LogIndComponent} from './log-ind/log-ind.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/startside', pathMatch: 'full'},
  {path: 'startside', component: StartsideComponent},
  {path: 'startside_kategori', component: StartsideKategoriComponent},
  {path: 'detaljeret_annonce', component: DetaljeretAnnonceComponent},
  {path: 'log_ind', component: LogIndComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
