import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget4',
  templateUrl: './widget4.component.html',
  styleUrls: ['./widget4.component.scss']
})
export class Widget4Component implements OnInit {

  @Input() bestDay: any;
  @Input() mainPlace :any;

  constructor( ) { }

  ngOnInit(): void {
  }

}
