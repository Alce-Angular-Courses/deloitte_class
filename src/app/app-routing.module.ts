import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MainTareasComponent } from './tareas2/main-tareas.component';
import { MainLibrosComponent } from './libros/main-libros.component';
import { FormMainComponent } from './formularios/form-main.component';
import { Main3Component } from './main3/main3.component';
import { PrinterComponent } from './formularios/printer/printer.component';

const routes: Routes = [
  { path: 'inicio', component: MainComponent },
  { path: 'tareas', component: MainTareasComponent },
  { path: 'libros', component: MainLibrosComponent },
  { path: 'print', component: PrinterComponent },
  { path: 'about', component: Main3Component },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

