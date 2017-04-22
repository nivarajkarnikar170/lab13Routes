import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { StudentComponent } from './student/student.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { myActivateGuard } from "./myActivateGuard";



const MY_ROUTES: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', component: HomeComponent},
  {path : 'students', component: StudentComponent},
  {path : 'profile/:id', component: ProfileComponent, canActivate: [myActivateGuard]},
  {path : 'error', component: ErrorComponent},
  {path : '**', redirectTo: '/'}
  ]
  

export const myRoutes = RouterModule.forRoot(MY_ROUTES);