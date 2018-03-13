import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from './shared/start.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: 
  [
    AppComponent, 
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,    
  ],

  imports: 
  [
    BrowserModule, 
    FormsModule, 
    HttpClientModule
  ],

  providers: 
  [
    ProductService
  ],

  bootstrap: 
  [
    AppComponent
  ]
})
export class AppModule { }
