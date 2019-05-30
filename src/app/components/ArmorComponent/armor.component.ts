import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.css']
})
export class ArmorComponent implements OnInit {

  @Input() details: object;
  @Output() removed = new EventEmitter<boolean>();

  constructor() {
  }

  remove() {
    this.removed.emit();
  }

  ngOnInit(): void {
    this.details['ilvl'] = '';
    this.details['colors'] = '';
    this.details['width'] = '';
    this.details['height'] = '';
    this.details['itemType'] = '';
  }
}
