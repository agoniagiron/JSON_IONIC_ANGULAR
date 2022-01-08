import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesPageRoutingModule } from './places-routing.module';

import { PlacesPage } from './places.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsonService } from './json.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    PlacesPageRoutingModule,
    HttpClientModule
  ],
  providers:[
    JsonService
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
