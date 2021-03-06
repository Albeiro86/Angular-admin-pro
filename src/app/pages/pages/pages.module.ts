import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProgressComponent } from '../progress/progress.component';
import { Grafica1Component } from '../grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent, 

  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    
    
  ]
})
export class PagesModule { }
