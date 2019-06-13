import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-width',
    templateUrl: './width.component.html'
  })
  export class WidthComponent implements OnInit {

    rangeRegEx: string;
    @Output() toParent = new EventEmitter<string>();
    val: string;

    constructor() {
      this.rangeRegEx = '((<|>|=|(<|>)=) )?([1-2])';
    }

    updateVal() {
      this.toParent.emit(this.val);
    }

    ngOnInit(): void {
      this.updateVal();
    }
  }
