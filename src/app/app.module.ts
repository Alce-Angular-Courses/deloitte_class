import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Modulos de la aplicacion
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { ComunicsModule } from './comunics/comunics.module';
import { TareasModule } from './tareas/tareas.module';
import { Tareas2Module } from './tareas2/tareas2.module';
import { Main3Module } from './main3/main3.module';
import { LibrosModule } from './libros/libros.module';
// Componente principal
import { AppComponent } from './app.component';
// Localizacion ES
import { LOCALE_ID} from '@angular/core';
import { registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { FormulariosModule } from './formularios/formularios.module';
// Servicio
import { LibrosMockService } from './services/libros-mock.service';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localeEs);



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule,
    ComunicsModule,
    TareasModule,
    Tareas2Module,
    Main3Module,
    FormulariosModule,
    LibrosModule,
    SharedModule
  ],
  providers: [
    LibrosMockService,
    { provide: LOCALE_ID, useValue: 'es' },
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
