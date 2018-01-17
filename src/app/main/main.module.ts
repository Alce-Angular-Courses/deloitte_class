import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { BindingComponent } from './binding/binding.component';
import { BindlocalComponent } from './bindlocal/bindlocal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    BindingComponent,
    BindlocalComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
