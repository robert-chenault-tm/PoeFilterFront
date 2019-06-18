import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-level',
    templateUrl: './level.component.html'
  })
  export class LevelComponent implements OnInit {

    rangeRegEx: string;
    @Output() toParent = new EventEmitter<string>();
    val: string;

    constructor() {
      this.rangeRegEx = '((<|>|=|(<|>)=) )?([1-9]|1[0-9]|2[0-1])';
    }

    updateVal() {
      this.toParent.emit(this.val);
    }

    ngOnInit(): void {
      this.updateVal();
    }
  }
