import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { AppRoutingModule, routingComponent } from './app-routing.module';
=======
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
>>>>>>> updated-sarthak
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from './material/material.module';
<<<<<<< HEAD
import { StudentQuesDispComponent } from './student-ques-disp/student-ques-disp.component';
import { TimerComponent } from './timer/timer.component';
import { QuestionSetComponent } from './question-set/question-set.component';
=======
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { LoginComponent } from './login/login.component'
import { SigninComponent } from './signin/signin.component';
import {  HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TestformService } from './testform.service';
import { FetchqService } from './fetchq.service';


>>>>>>> updated-sarthak



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
<<<<<<< HEAD
    routingComponent,
    StudentQuesDispComponent,
    TimerComponent,
    QuestionSetComponent
=======
    DialogboxComponent,
    LoginComponent,
    SigninComponent,
    RoutingComponent
>>>>>>> updated-sarthak

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
    
  ],
  providers: [AuthService,TestformService
  ,FetchqService],
  bootstrap: [AppComponent],
  entryComponents : [DialogboxComponent,
  LoginComponent,
SigninComponent]
})
export class AppModule { }
