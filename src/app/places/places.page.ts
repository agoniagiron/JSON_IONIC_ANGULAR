import { Component, OnInit } from '@angular/core';
import { Datos } from './datos.model';
import { JsonService } from './json.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {


  public term: string;
  public users: Datos[]=[];;

  constructor(public json: JsonService) {

  }
  ngOnInit(): void {
    console.log('aqui estoy');
    this.mostrarDatos();
    console.log(this.users);

  }
  mostrarDatos() {
    this.json.getJson().subscribe((data: Datos[]) => {
      this.users = data;
    });
  }

}
