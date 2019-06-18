import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-height',
    templateUrl: './height.component.html'
  })
  export class HeightComponent implements OnInit {

    rangeRegEx: string;
    @Output() toParent = new EventEmitter<string>();
    val: string;

    constructor() {
      this.rangeRegEx = '((<|>|=|(<|>)=) )?([1-4])';
    }

    updateVal() {
      this.toParent.emit(this.val);
    }

    ngOnInit(): void {
      this.updateVal();
    }
  }
