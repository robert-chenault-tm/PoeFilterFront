import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-ilvl',
    templateUrl: './ilvl.component.html'
  })
  export class IlvlComponent implements OnInit {

    rangeRegEx: string;
    @Output() toParent = new EventEmitter<string>();
    val: string;

    constructor() {
      this.rangeRegEx = '((<|>|=|(<|>)=) )?([0-9]|[1-9][0-9]|100)';
    }

    updateVal() {
      this.toParent.emit(this.val);
    }

    ngOnInit(): void {
      this.updateVal();
    }
  }
