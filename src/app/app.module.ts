import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { myRoutes } from './app.routes';
import { StudentComponent } from './student/student.component';

import { DbService } from './db.service';
import { ProfileComponent } from './profile/profile.component';
import { myActivateGuard } from "./myActivateGuard";
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [DbService, myActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
