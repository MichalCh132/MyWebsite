import { TwoColorButtonModel } from '../../shared/interfaces/two-color-button-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  buttons: TwoColorButtonModel[] = [
  {name: 'HOME', active: false, routerLink: 'home'},
  {name: 'SKILLS', active: false, routerLink: 'skills'},
  {name: 'CONTACT', active: false, routerLink: 'contact'}]

  constructor() {}

  ngOnInit(): void {
  }

}
