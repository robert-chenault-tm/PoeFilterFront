import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private armorEntries = [];
  private currencyEntries = [];
  private essenceEntries = [];
  private fossilEntries = [];
  private gemEntries = [];
  private jewelryEntries = [];
  private mapEntries = [];
  private questEntries = [];
  private weaponEntries = [];
  private displayArmor = true;
  private displayCurrency = true;
  private displayEssences = true;
  private displayFossils = true;
  private displayGems = true;
  private displayJewelry = true;
  private displayMaps = true;
  private displayQuests = true;
  private displayWeapons = true;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'arraybuffer'
    })
  };

  constructor(private http: HttpClient) {
  }

  private toggleArmor() {
    this.displayArmor = !this.displayArmor;
  }
  private toggleCurrency() {
    this.displayCurrency = !this.displayCurrency;
  }
  private toggleEssences() {
    this.displayEssences = !this.displayEssences;
  }
  private toggleFossils() {
    this.displayFossils = !this.displayFossils;
  }
  private toggleGems() {
    this.displayGems = !this.displayGems;
  }
  private toggleJewelry() {
    this.displayJewelry = !this.displayJewelry;
  }
  private toggleMaps() {
    this.displayMaps = !this.displayMaps;
  }
  private toggleQuests() {
    this.displayQuests = !this.displayQuests;
  }
  private toggleWeapons() {
    this.displayWeapons = !this.displayWeapons;
  }

  private onRemoved(entries: object[], entry: object) {
    entries.splice(entries.indexOf(entry), 1);
  }

  private submitToBackend() {
    let filter = {};
    filter['armorList'] = this.armorEntries;
    filter['currencyList'] = this.currencyEntries;
    filter['essenceList'] = this.essenceEntries;
    filter['fossilList'] = this.fossilEntries;
    filter['gemList'] = this.gemEntries;
    filter['jewelryList'] = this.jewelryEntries;
    filter['mapList'] = this.mapEntries;
    filter['questList'] = this.questEntries;
    filter['weaponList'] = this.weaponEntries;

    //console.log(filter);

    let thing = {
      thing: 'Test successful',
      armor: this.armorEntries
    };

    this.http.post('http://localhost:8080/generateFilter', filter, 
    {responseType: 'arraybuffer' as 'json'})
    .subscribe(response => this.downLoadFile(response, 'text/plain'));


    // this.http.get('http://localhost:8080/').subscribe((data: any) => {
    //   console.log(data);
    // });


  }

  downLoadFile(data: any, type: string) {
    var blob = new Blob([data], { type: type});
    saveAs(blob, 'custom.filter');
  }
}
