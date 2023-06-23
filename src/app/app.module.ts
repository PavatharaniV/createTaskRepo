import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {FormsModule} from '@angular/forms';
import { CreateTaskComponent } from './create-task/create-task.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    CreateNewTaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatSelectModule,
    HttpClientModule,
    ToastrModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
