import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-rarity-dropdown',
  templateUrl: './rarityDD.component.html',
  styleUrls: ['./rarityDD.component.css']
})
export class RarityDropDownComponent implements OnInit {


  choices: string[];
  selectedValue: string;
  @Output() selected: EventEmitter<string>;
  @Input() title: string;

  constructor() {
    this.choices = ['Any', 'Normal', 'Magic', 'Rare', 'Unique', 'Non-Unique'];
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
