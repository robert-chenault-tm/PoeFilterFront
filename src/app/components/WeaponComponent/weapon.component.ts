import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css']
})
export class WeaponComponent implements OnInit {

  @Input() details: any;
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
