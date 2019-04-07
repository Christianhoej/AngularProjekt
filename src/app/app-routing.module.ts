import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TraeComponent} from './trae/trae.component';
import {StartsideComponent} from './startside/startside.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/startside', pathMatch: 'full'},
  {path: 'trae', component: TraeComponent},
  {path: 'startside', component: StartsideComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
