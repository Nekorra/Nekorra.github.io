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
  { path: 'Professor-Website/awards', component: AwardsComponent },
  { path: 'Professor-Website/home', component: HomeComponent },
  { path: 'Professor-Website/publications', component: PublicationsComponent },
  { path: 'Professor-Website/research', component: ResearchComponent }, 
  { path: 'Professor-Website/students', component: StudentsComponent },
  { path: 'Professor-Website/login', component: LoginComponent },
  { path: 'Professor-Website/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'Professor-Website/cv', component: CvComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
