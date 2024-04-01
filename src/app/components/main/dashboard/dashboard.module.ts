import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBigeventComponent } from './bigevent/create-bigevent/create-bigevent.component';
import { IndexBigeventComponent } from './bigevent/index-bigevent/index-bigevent.component';
import { CreatePodcastComponent } from './podcast/create-podcast/create-podcast.component';
import { IndexPodcastComponent } from './podcast/index-podcast/index-podcast.component';
import { CreateZeInsideComponent } from './ze-inside/create-ze-inside/create-ze-inside.component';
import { IndexZeInsideComponent } from './ze-inside/index-ze-inside/index-ze-inside.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashbordContentComponent } from './dashbord-content/dashbord-content.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { EditPodcastComponent } from './podcast/edit-podcast/edit-podcast.component';
import { ConfirmationmodalComponent } from './confirmationmodal/confirmationmodal.component';



@NgModule({
  declarations: [
    IndexPodcastComponent,
    CreatePodcastComponent,
    IndexZeInsideComponent,
    CreateZeInsideComponent,
    CreateBigeventComponent,
    IndexBigeventComponent,
    SidbarComponent,
    DashboardComponent,
    DashbordContentComponent,
    EditPodcastComponent,
    ConfirmationmodalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
  ],
  exports: [
    ConfirmationmodalComponent // Export ConfirmationmodalComponent if you want to use it outside the DashboardModule
  ]
})
export class DashboardModule { }
