import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Dropdown} from "../../../jarvis-theme/src";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      Dropdown
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
