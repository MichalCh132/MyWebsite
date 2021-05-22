import { TwoColorButtonModel } from './../../interfaces/two-color-button-model';
import { Component, Input, OnInit } from '@angular/core';

enum colorSide{
  right,
  left
}
@Component({
  selector: 'app-two-color-button',
  templateUrl: './two-color-button.component.html',
  styleUrls: ['./two-color-button.component.less']
})
export class TwoColorButtonComponent implements OnInit {

  readonly colorSides = colorSide;
  @Input('params') params: TwoColorButtonModel
  chars: string[];
  colorSide: colorSide = this.colorSides.left;
  active: boolean;
  hover: boolean;
  constructor() { }

  ngOnInit(): void {
    this.chars = this.params.name.split('');
  }

  setHover(hover: boolean){
    this.hover = hover;
  }

  setActive(active: boolean){
    this.active = active;
  }
}

