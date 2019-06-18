import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html'
  })
  export class ColorsComponent implements OnInit {

    rangeRegEx: string;
    @Output() toParent = new EventEmitter<string>();
    val: string;

    constructor() {
      this.rangeRegEx = '(R*|G*|B*|W*)*';
    }

    updateVal() {
      this.toParent.emit(this.val);
    }

    ngOnInit(): void {
      this.updateVal();
    }
  }
