import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/main/content/content.component';
import { TheInsideComponent } from './components/main/the-inside/the-inside.component';
import { FlashBackComponent } from './components/main/flash-back/flash-back.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { PodcastComponent } from './components/main/podcast/podcast.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  {path:'the-inside', component:TheInsideComponent},
  {path:'flashBack', component:FlashBackComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'podcast', component:PodcastComponent},
  // {path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
