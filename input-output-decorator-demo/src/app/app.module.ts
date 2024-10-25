import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FruitManagerComponent } from './fruit-manager/fruit-manager.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { AnimalComponent } from './animal/animal.component';
import { DogComponent } from './dog/dog.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FruitManagerComponent,
    FruitListComponent,
    AnimalComponent,
    DogComponent,
    ProductManagerComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
