import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    MatSelectModule,FormsModule,MatInputModule,MatButtonModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
