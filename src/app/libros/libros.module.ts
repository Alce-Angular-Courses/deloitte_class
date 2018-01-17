import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLibrosComponent } from './main-libros.component';
import { BuscarLibrosComponent } from './buscar-libros/buscar-libros.component';
import { FormsModule } from '@angular/forms';
import { BuscarGoogleComponent } from './buscar-google/buscar-google.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    MainLibrosComponent,
    BuscarLibrosComponent,
    BuscarGoogleComponent
  ],
  exports: [
    MainLibrosComponent
  ]
})
export class LibrosModule { }
