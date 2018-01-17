import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasComponent } from './tareas.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TareasComponent,
    ListaComponent
  ],
  exports: [
    TareasComponent
  ]
})
export class TareasModule { }
