import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMainComponent } from './form-main.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { PrinterComponent } from './printer/printer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FormMainComponent,
    UserComponent,
    PrinterComponent
  ],
  exports: [
    FormMainComponent,
    PrinterComponent
  ]

})
export class FormulariosModule { }
