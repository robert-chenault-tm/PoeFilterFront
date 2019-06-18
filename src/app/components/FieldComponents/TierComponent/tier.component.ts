import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-tier',
    templateUrl: './tier.component.html'
  })
  export class TierComponent implements OnInit {

    rangeRegEx: string;
    @Output() toParent = new EventEmitter<string>();
    val: string;

    constructor() {
      this.rangeRegEx = '((<|>|=|(<|>)=) )?([1-9]|1[0-7])';
    }

    updateVal() {
      this.toParent.emit(this.val);
    }

    ngOnInit(): void {
      this.updateVal();
    }
  }
