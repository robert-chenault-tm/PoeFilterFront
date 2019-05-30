import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-details',
  templateUrl: './base-details.component.html',
  styleUrls: ['./base-details.component.css']
})
export class BaseDetailsComponent implements OnInit{

  private contents: object;
  @Output() choices: EventEmitter<object>;

  constructor() {
    this.contents = {};
    this.choices = new EventEmitter();
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
