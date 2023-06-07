import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AwardsComponent } from './awards/awards.component';
import { PublicationsComponent } from './publications/publications.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { ResearchComponent } from './research/research.component';
import { StudentsComponent } from './students/students.component';

import { environment } from 'src/environments/environment.prod';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { MatDialogModule } from '@angular/material/dialog';
import { AwardModalComponent } from './modals/award-modal/award-modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResearchModalComponent } from './modals/research-modal/research-modal.component';
import { PublicationsModalComponent } from './modals/publications-modal/publications-modal.component';
import { SearchPipe } from './search.pipe';
import { JournalsModalComponent } from './modals/journals-modal/journals-modal.component';
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AwardsComponent,
    PublicationsComponent,
    ResearchComponent,
    StudentsComponent,
    LoginComponent,
    DashboardComponent,
    AwardModalComponent,
    ResearchModalComponent,
    PublicationsModalComponent,
    SearchPipe,
    JournalsModalComponent,
    CvComponent,
    
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
