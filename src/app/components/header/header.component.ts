import { TwoColorButtonModel } from '../../shared/interfaces/two-color-button-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  buttons: TwoColorButtonModel[] = [{name: 'home'},{name: 'skills'},{name: 'contact'}]

  constructor() {}

  ngOnInit(): void {
  }

}
