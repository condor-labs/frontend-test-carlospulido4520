import { Component, Input, OnInit } from '@angular/core';
import { campus } from 'src/app/models/campus';

@Component({
  selector: 'app-widget3',
  templateUrl: './widget3.component.html',
  styleUrls: ['./widget3.component.scss']
})
export class Widget3Component implements OnInit {

  @Input() otherPlaces: campus[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
