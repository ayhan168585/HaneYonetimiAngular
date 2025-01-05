import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { FamilyPerson } from '../models/familyPerson';

@Injectable({
  providedIn: 'root'
})
export class FamilyPersonService {
  apiUrl = 'https://localhost:7039/api/';


  constructor(private httpClient:HttpClient) { }

  getFamilyPersons():Observable<ListResponseModel<FamilyPerson>>{
    let newPath=this.apiUrl+"familypersons/getall"
    return this.httpClient.get<ListResponseModel<FamilyPerson>>(newPath)
  }
}
