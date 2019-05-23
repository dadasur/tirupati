import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousFirstComponent } from './MarvellousFirst/MarvellousFirst.component';
import { MarvellousSecondComponent } from './marvellous-second/marvellous-second.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousFirstComponent,
    MarvellousSecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
