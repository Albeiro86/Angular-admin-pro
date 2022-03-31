import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from '../404/nopagefound.component';

import { PagesRoutingModule } from '../pages/pages.routing';
import { AuthRoutingModule } from '../auth/auth.routing';

const routes: Routes = [ 
  // las rutas estan declaradas en los modulos correspondientes 
  //pages.routing 
  //aut.routing    
  {path:'', redirectTo: '/dashboard', pathMatch:'full'},
  {path:'**', component: NopagefoundComponent},
];  


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
   
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
