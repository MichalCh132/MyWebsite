import { TwoColorButtonModel } from './../../interfaces/two-color-button-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-color-button',
  templateUrl: './two-color-button.component.html',
  styleUrls: ['./two-color-button.component.less']
})
export class TwoColorButtonComponent implements OnInit {

  @Input('params') params: TwoColorButtonModel
  constructor() { }

  ngOnInit(): void {
  }

}
