import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-essence',
  templateUrl: './essence.component.html',
  styleUrls: ['./essence.component.css']
})
export class EssenceComponent {

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
