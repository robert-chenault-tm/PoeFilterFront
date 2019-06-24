import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yes-no-either-dropdown',
  templateUrl: './yesNoEitherDD.component.html',
  styleUrls: ['./yesNoEitherDD.component.css']
})
export class YesNoEitherDropDownComponent implements OnInit {


  choices: string[];
  selectedValue: string;
  @Output() selected: EventEmitter<string>;
  @Input() title: string;

  constructor() {
    this.choices = ['Either', 'Yes', 'No'];
    this.selectedValue = this.choices[0];
    this.selected = new EventEmitter();
  }

  choose() {
    this.selected.emit(this.selectedValue);
  }

  ngOnInit(): void {
    this.choose();
  }

}
