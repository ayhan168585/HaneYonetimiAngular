import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Unit } from '../models/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  apiUrl = 'https://localhost:7039/api/';

  constructor(private httpClient:HttpClient) { }

  getUnits():Observable<ListResponseModel<Unit>>{
    let newPath=this.apiUrl+"units/getall"
    return this.httpClient.get<ListResponseModel<Unit>>(newPath)
  }

  add(unit:Unit){
    return this.httpClient.post(this.apiUrl+"units/addunit",unit)
  }
}
