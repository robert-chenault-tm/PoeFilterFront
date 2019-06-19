import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html'
  })
  export class FieldComponent implements OnInit {

    // rangeRegEx: string;
    @Output() toParent = new EventEmitter<string>();
    @Input() title: string;
    @Input() rangeRegEx: string;
    @Input() maxlength: string;
    val: string;

    constructor() {
    //   this.rangeRegEx = '((<|>|=|(<|>)=) )?([0-9]|[1-9][0-9]|100)';
    }

    updateVal() {
      this.toParent.emit(this.val);
    }

    ngOnInit(): void {
      this.updateVal();
    }
  }
