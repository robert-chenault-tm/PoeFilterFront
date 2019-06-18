import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-quality',
    templateUrl: './quality.component.html'
  })
  export class QualityComponent implements OnInit {

    rangeRegEx: string;
    @Output() toParent = new EventEmitter<string>();
    val: string;

    constructor() {
      this.rangeRegEx = '((<|>|=|(<|>)=) )?([0-9]|1[0-9]|20)';
    }

    updateVal() {
      this.toParent.emit(this.val);
    }

    ngOnInit(): void {
      this.updateVal();
    }
  }
