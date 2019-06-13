import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArmorComponent } from './components/ArmorComponent/armor.component';
import { CurrencyComponent } from './components/CurrencyComponent/currency.component';
import { EssenceComponent } from './components/EssenceComponent/essence.component';
import { FossilComponent } from './components/FossilComponent/fossil.component';
import { JewelryComponent } from './components/JewleryComponent/jewelry.component';
import { MapComponent } from './components/MapComponent/map.component';
import { QuestComponent } from './components/QuestComponent/quest.component';
import { WeaponComponent } from './components/WeaponComponent/weapon.component';
import { BaseDetailsComponent } from './components/BaseDetailsComponent/base-details.component';
import { GemComponent } from './components/GemComponent/gem.component';
import { RarityDropDownComponent } from './components/DropDownComponents/RarityDropDownComponent/rarityDD.component';
import { YesNoEitherDropDownComponent } from './components/DropDownComponents/YesNoEitherDropDownComponent/yesNoEitherDD.component';
import { WidthComponent } from './components/FieldComponents/WidthComponent/width.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmorComponent,
    BaseDetailsComponent,
    CurrencyComponent,
    EssenceComponent,
    FossilComponent,
    GemComponent,
    JewelryComponent,
    MapComponent,
    QuestComponent,
    RarityDropDownComponent,
    WeaponComponent,
    WidthComponent,
    YesNoEitherDropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
