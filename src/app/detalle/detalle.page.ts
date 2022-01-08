import { Component, OnInit, platformCore } from '@angular/core';
import { PlacesPage } from '../places/places.page';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  detalleLugar: any=[];
  detalleLugar2: any=[];

  constructor(private parametro: ActivatedRoute) { }

  ngOnInit() {
    this.parametro.paramMap.subscribe(lugar => {
     this.detalleLugar = lugar;
     this.detalleLugar2 = this.detalleLugar.params;
     console.log(this.detalleLugar.params);
    });
  }

}
