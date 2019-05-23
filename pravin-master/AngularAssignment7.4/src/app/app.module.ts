import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    MatSelectModule,FormsModule,MatInputModule,MatButtonModule,MatTableModule,CdkTableModule,MatDatepickerModule,MatNativeDateModule
    
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
