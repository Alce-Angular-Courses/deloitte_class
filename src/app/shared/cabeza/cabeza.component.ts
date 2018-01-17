import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  // template: ``,
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  title: string;
  logo: string;

  constructor() {
   }

  ngOnInit() {
    this.title = 'Deloitte';
    this.logo = '../../assets/logo_angular.svg';
  }

}
