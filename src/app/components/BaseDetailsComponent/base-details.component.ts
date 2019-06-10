import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-details',
  templateUrl: './base-details.component.html',
  styleUrls: ['./base-details.component.css']
})
export class BaseDetailsComponent implements OnInit{

  contents: any;
  @Output() choices: EventEmitter<object>;
  colorRangeRegEx: string;
  sizeRangeRegEx: string;

  constructor() {
    this.contents = {};
    this.choices = new EventEmitter();
    this.colorRangeRegEx = '([0-9]|[0-9][0-9]|0[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]) ([0-9]|[0-9][0-9]|0[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]) ([0-9]|[0-9][0-9]|0[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])( ([0-9]|[0-9][0-9]|0[0-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))?';
    this.sizeRangeRegEx = '(1[8-9]|[2-3][0-9]|4[0-5])';
  }

  update() {
    this.choices.emit(this.contents);
  }

  ngOnInit(): void {
    this.contents['description'] = '';
    this.contents['hide'] = false;
    this.contents['font'] = '';
    this.contents['border'] = '';
    this.contents['background'] = '';
    this.update();
  }

}
