import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicsComponent } from './comunics.component';
import { PadreComponent } from './padre/padre.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ComunicsComponent,
    PadreComponent,
    HijoComponent
  ],
  exports: [
    ComunicsComponent
  ]
})
export class ComunicsModule { }
