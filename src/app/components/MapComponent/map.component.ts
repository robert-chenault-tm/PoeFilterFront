import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() details: any;
  @Output() removed = new EventEmitter<boolean>();

  constructor() {
  }

  remove() {
    this.removed.emit();
  }
  ngOnInit(): void {
    this.details['tier'] = '';
    this.details['quality'] = '';
  }
}
