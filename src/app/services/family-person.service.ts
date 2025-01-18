import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { FamilyPerson } from '../models/familyPerson';

@Injectable({
  providedIn: 'root'
})
export class FamilyPersonService {
  id: number;
  fullName: string;
  email: string;
  password: string;
  profilePicture: string;
  roleId: number;
  apiUrl = 'https://localhost:7039/api/';


  constructor(private httpClient:HttpClient) { }

  getFamilyPersons():Observable<ListResponseModel<FamilyPerson>>{
    let newPath=this.apiUrl+"familypersons/getall"
    return this.httpClient.get<ListResponseModel<FamilyPerson>>(newPath)
  }

  addFamilyPerson(person: FamilyPerson): Observable<FamilyPerson> {
    // Ör: POST /api/familypersons/addfamilyperson
    return this.httpClient.post<FamilyPerson>(`${this.apiUrl}familyPersons/addfamilyperson`, person);
  }

  uploadProfilePicture(familyPersonId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('profilePicture', file);

    // Ör: POST /api/familypersons/upload-profile-picture/{familyPersonId}
    return this.httpClient.post(`${this.apiUrl}familypersons/upload-profile-picture/${familyPersonId}`, formData);
  }
}
