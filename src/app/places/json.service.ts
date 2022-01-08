import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datos } from './datos.model';



@Injectable()
export class JsonService{

  url = '../../assets/MOCK_DATA.json';

  constructor(private http: HttpClient){}

  getJson(){
    return this.http.get<Datos[]>(this.url);

}
}
