import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.less']
})
export class FirstPageComponent implements OnInit {

  descOne: string = "Hi i'm Michał";
  descTwo: string = "Web Developer" ;
  descThree: string = "I create interactive web applications using Angular";
  constructor() { }

  ngOnInit(): void {
  }

}
