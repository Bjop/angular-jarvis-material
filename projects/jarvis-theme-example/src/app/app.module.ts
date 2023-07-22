import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JarvisThemeModule } from 'jarvis-theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JarvisThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
