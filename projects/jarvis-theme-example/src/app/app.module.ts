import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Dropdown, LoaderRound} from "../../../jarvis-theme/src";
import {Button, TextInput} from "../../../jarvis-theme/src";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Dropdown,
    Button,
    TextInput,
    ReactiveFormsModule,
    FormsModule,
    LoaderRound
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
