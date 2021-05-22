import { TwoColorButtonModel } from '../../shared/interfaces/two-color-button-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  buttons: TwoColorButtonModel[] = [{name: 'HOME', active: false},{name: 'SKILLS', active: false},{name: 'CONTACT', active: false}]

  constructor() {}

  ngOnInit(): void {
  }

}
