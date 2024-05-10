import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheInsideComponent } from './components/main/the-inside/the-inside.component';
import { FlashBackComponent } from './components/main/flash-back/flash-back.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { PodcastComponent } from './components/main/podcast/podcast.component';
import { LoginComponent } from './components/main/auth/login/login.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { IndexPodcastComponent } from './components/main/dashboard/podcast/index-podcast/index-podcast.component';
import { IndexZeInsideComponent } from './components/main/dashboard/ze-inside/index-ze-inside/index-ze-inside.component';
import { IndexBigeventComponent } from './components/main/dashboard/bigevent/index-bigevent/index-bigevent.component';
import { CreatePodcastComponent } from './components/main/dashboard/podcast/create-podcast/create-podcast.component';
import { DashbordContentComponent } from './components/main/dashboard/dashbord-content/dashbord-content.component';
import { authGuard } from './auth.guard';
import { EditPodcastComponent } from './components/main/dashboard/podcast/edit-podcast/edit-podcast.component';
import { CreateBigeventComponent } from './components/main/dashboard/bigevent/create-bigevent/create-bigevent.component';
import { CreateZeInsideComponent } from './components/main/dashboard/ze-inside/create-ze-inside/create-ze-inside.component';
import { ZeA1Component } from './components/main/ze-a1/ze-a1.component';
import { BigeventComponent } from './components/main/bigevent/bigevent.component';
import { ContentComponent } from './components/main/content/content.component';
import { Zea1Component } from './components/main/dashboard/zea1/zea1.component';

const routes: Routes = [
  { path: '', redirectTo: '/ze-a1', pathMatch: 'full' },
  { path: 'ze-a1', component: ZeA1Component },
  { path: 'the-inside', component: TheInsideComponent },
  { path: 'flashBack', component: FlashBackComponent },
  { path: 'bigevent', component: BigeventComponent},
  { path: 'contact', component: ContactUsComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'content', component: ContentComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivateChild:[authGuard], children: [
      { path: 'index', component: DashbordContentComponent },
      { path: 'index-podcast', component: IndexPodcastComponent },
      { path: 'create-podcast', component: CreatePodcastComponent },
      { path: 'edit-podcast/:title', component: EditPodcastComponent },
      { path: 'index-zeinside', component: IndexZeInsideComponent },
      { path: 'add-zea1', component: Zea1Component},
      { path: 'add-zeinside', component: CreateZeInsideComponent },
      { path: 'index-bigevent', component: IndexBigeventComponent },
      { path: 'add-bigevent', component: CreateBigeventComponent },
    ]
  },

  // {path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
