import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import { LoginComponent } from './components/main/auth/login/login.component';
import { UserModalComponent } from './components/main/user-modal/user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { DashboardModule } from './components/main/dashboard/dashboard.module';
import { BigeventComponent } from './components/main/bigevent/bigevent.component';
import { TimeoutInterceptor } from './service/timeoutInterceptor';
import { Zea1Component } from './components/dashboard/zea1/zea1.component';

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
    ContentComponent,
    LoginComponent,
    UserModalComponent,
    BigeventComponent,
    Zea1Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    DashboardModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimeoutInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
