import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from './material/material.module';
import { StudentQuesDispComponent } from './student-ques-disp/student-ques-disp.component';
import { TimerComponent } from './timer/timer.component';
import { QuestionSetComponent } from './question-set/question-set.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    routingComponent,
    StudentQuesDispComponent,
    TimerComponent,
    QuestionSetComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
