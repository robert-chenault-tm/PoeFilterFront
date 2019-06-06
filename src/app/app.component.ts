import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { DeployConfigService } from './services/DeployConfig/deploy-config.service';

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
  displayArmor = true;
  displayCurrency = true;
  displayEssences = true;
  displayFossils = true;
  displayGems = true;
  displayJewelry = true;
  displayMaps = true;
  displayQuests = true;
  displayWeapons = true;
  private baseUrl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      responseType: 'arraybuffer'
    })
  };

  constructor(private http: HttpClient, private deployConfigService: DeployConfigService) {
    this.baseUrl = deployConfigService.getBaseUrl();
  }

  toggleArmor() {
    this.displayArmor = !this.displayArmor;
  }
  toggleCurrency() {
    this.displayCurrency = !this.displayCurrency;
  }
  toggleEssences() {
    this.displayEssences = !this.displayEssences;
  }
  toggleFossils() {
    this.displayFossils = !this.displayFossils;
  }
  toggleGems() {
    this.displayGems = !this.displayGems;
  }
  toggleJewelry() {
    this.displayJewelry = !this.displayJewelry;
  }
  toggleMaps() {
    this.displayMaps = !this.displayMaps;
  }
  toggleQuests() {
    this.displayQuests = !this.displayQuests;
  }
  toggleWeapons() {
    this.displayWeapons = !this.displayWeapons;
  }

  private onRemoved(entries: object[], entry: object) {
    entries.splice(entries.indexOf(entry), 1);
  }

  submitToBackend() {
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

    this.http.post(this.baseUrl + '/generateFilter', filter,
    {responseType: 'arraybuffer' as 'json'})
    .subscribe(response => this.downLoadFile(response, 'text/plain'));
  }

  downLoadFile(data: any, type: string) {
    var blob = new Blob([data], { type: type});
    saveAs(blob, 'custom.filter');
  }
}
