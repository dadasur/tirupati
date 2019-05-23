import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirDirective } from './my-dir.directive';
import { DirectiveNameDirective } from './directive-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyDirDirective,
    DirectiveNameDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
