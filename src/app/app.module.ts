import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZeA1Component } from './components/main/ze-a1/ze-a1.component';
import { TheInsideComponent } from './components/main/the-inside/the-inside.component';
import { FlashBackComponent } from './components/main/flash-back/flash-back.component';
import { PodcastComponent } from './components/main/podcast/podcast.component';
import { ContactUsComponent } from './components/main/contact-us/contact-us.component';
import { HeaderComponent } from './components/sub/header/header.component';
import { FooterComponent } from './components/sub/footer/footer.component';
import { ContentComponent } from './components/main/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ZeA1Component,
    TheInsideComponent,
    FlashBackComponent,
    PodcastComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
