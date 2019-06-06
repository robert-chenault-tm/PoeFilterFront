import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeployConfigService {

  private baseLocalUrl: string;
  private basePCFUrl: string;
  private activeBaseUrl: string;

  constructor() {
    this.baseLocalUrl = 'http://localhost:8080';
    this.basePCFUrl = 'https://chenaurj-poe-filter-back.cfapps.io/';

    // Change me
    this.activeBaseUrl = this.basePCFUrl;

  }

  getBaseUrl(): string {
    return this.activeBaseUrl;
  }
}
