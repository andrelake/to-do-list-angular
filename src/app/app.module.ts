import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { InputNewtaskComponent } from './navbar/input-newtask/input-newtask.component';
import { TaskListComponent } from './task-list/task-list.component';
import {TaskService} from '../services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputNewtaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
