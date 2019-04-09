import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavComponent } from './nav/nav.component';
import { TeacherDashComponent } from './teacher-dash/teacher-dash.component';
import { TeacherFullComponent } from './teacher-full/teacher-full.component';
import { TestFormComponent } from './test-form/test-form.component';
import { QInputComponent } from './q-input/q-input.component';
import { TestDashComponent } from './test-dash/test-dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { MaterialModule} from './material/material.module';
import { ReportComponent } from './report/report.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import {  HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TestformService } from './testform.service';
import { FetchqService } from './fetchq.service';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TeacherDashComponent,
    TeacherFullComponent,
    TestFormComponent,
    QInputComponent,
    TestDashComponent,
    QuestionComponent,
    ReportComponent,
    DialogboxComponent,
    LoginComponent,
    HomeComponent,
    SigninComponent


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
