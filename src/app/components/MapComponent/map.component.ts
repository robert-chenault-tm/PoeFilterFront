import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() details: any;
  @Output() removed = new EventEmitter<boolean>();
  tierRangeRegEx: string;
  qualityRangeRegEx: string;

  constructor() {
    this.tierRangeRegEx = '((<|>|=|(<|>)=) )?([1-9]|1[0-7])';
    this.qualityRangeRegEx = '((<|>|=|(<|>)=) )?([0-9]|1[0-9]|20)';
  }

  remove() {
    this.removed.emit();
  }
  ngOnInit(): void {
    this.details['tier'] = '';
    this.details['quality'] = '';
  }
}
