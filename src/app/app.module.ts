import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent  //components,directives,pipes
  ],
  imports: [
    BrowserModule,  //other modules
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration() //services details
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
