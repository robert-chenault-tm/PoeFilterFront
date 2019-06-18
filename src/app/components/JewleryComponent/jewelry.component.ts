import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.css']
})
export class JewelryComponent implements OnInit {

  @Input() details: any;
  @Output() removed = new EventEmitter<boolean>();

  constructor() {

  }

  remove() {
    this.removed.emit();
  }

  onChanged(val: any, field: string) {
    this.details[field] = val;
  }

  ngOnInit(): void {
    this.details['ilvl'] = '';
    this.details['itemType'] = '';
  }
}
