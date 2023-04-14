import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeatchartModule } from './features/seatchart/seatchart.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeatchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
