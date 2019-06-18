import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {

  @Input() details: any;
  @Output() removed = new EventEmitter<boolean>();

  constructor() {

  }

  onChanged(val: any, field: string) {
    this.details[field] = val;
  }

  remove() {
    this.removed.emit();
  }

  ngOnInit(): void {
    this.details['level'] = '';
    this.details['quality'] = '';
  }
}
