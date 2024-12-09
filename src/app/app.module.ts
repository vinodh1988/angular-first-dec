import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent  //components,directives,pipes
  ],
  imports: [
    BrowserModule,  //other modules
    AppRoutingModule
  ],
  providers: [
    provideClientHydration() //services details
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
