import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
// Import other components

@NgModule({
  declarations: [
    AppComponent,
    // Declare other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    ReactiveFormsModule, // Add HttpClientModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }