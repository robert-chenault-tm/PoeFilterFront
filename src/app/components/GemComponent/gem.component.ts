import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

  @Input() details: any;
  @Output() removed = new EventEmitter<boolean>();
  qualityRangeRegEx: string;
  levelRangeRegEx: string;

  constructor() {
    this.qualityRangeRegEx = '((<|>|=|(<|>)=) )?([0-9]|1[0-9]|20)';
    this.levelRangeRegEx = '((<|>|=|(<|>)=) )?([1-9]|1[0-9]|2[0-1])';
  }

  remove() {
    this.removed.emit();
  }

  ngOnInit(): void {
    this.details['level'] = '';
    this.details['quality'] = '';
  }
}
