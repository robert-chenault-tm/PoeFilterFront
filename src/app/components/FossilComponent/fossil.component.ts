import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-fossil',
  templateUrl: './fossil.component.html',
  styleUrls: ['./fossil.component.css']
})
export class FossilComponent implements OnInit {

  @Input() details: any;
  @Output() removed = new EventEmitter<boolean>();

  constructor() {
  }

  remove() {
    this.removed.emit();
  }

  ngOnInit(): void {
    this.details['baseType'] = '';
  }
}
