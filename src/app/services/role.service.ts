import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  apiUrl = 'https://localhost:7039/api/';


  constructor(private httpClient:HttpClient) { }

  getRoles():Observable<ListResponseModel<Role>>{
    let newPath=this.apiUrl+"roles/getall"
    return this.httpClient.get<ListResponseModel<Role>>(newPath)
  }

  add(role:Role){
    return this.httpClient.post(this.apiUrl+"roles/addRole",role)
  }
}
