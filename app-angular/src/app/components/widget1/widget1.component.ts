import { Component, Input, OnInit } from '@angular/core';
import { campus } from 'src/app/models/campus';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss']
})
export class Widget1Component implements OnInit {

  @Input() mainPlace: campus = {
    image : '',
    main : {
      temp : 20
    },
    wind: {},
    weather: [
      { icon : 'snow'}
    ]
  };

  constructor( ) { }

  ngOnInit(): void {
  }
}
