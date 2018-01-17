import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bindlocal',
  templateUrl: './bindlocal.component.html',
  styleUrls: ['./bindlocal.component.css']
})
export class BindlocalComponent implements OnInit {

  @ViewChild('nombre') vistaName: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.vistaName);
    this.vistaName.nativeElement.value = 'Pepe';
  }

}
