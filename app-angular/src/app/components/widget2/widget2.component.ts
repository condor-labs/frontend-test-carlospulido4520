import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.scss']
})
export class Widget2Component implements OnInit {

  @Input() days : any[] = [];

  aumentedPixels = 0;

  constructor() { }

  ngOnInit(): void {

  }

  left() {
    this.aumentedPixels = this.aumentedPixels + 450;
  }

  right() {
    this.aumentedPixels = this.aumentedPixels - 450;
  }

}
