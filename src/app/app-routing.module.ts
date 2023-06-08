import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';
import { AwardsComponent } from './awards/awards.component';
import { PublicationsComponent } from './publications/publications.component';
import { ResearchComponent } from './research/research.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CvComponent } from './cv/cv.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'research', component: ResearchComponent }, 
  { path: 'students', component: StudentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'cv', component: CvComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
