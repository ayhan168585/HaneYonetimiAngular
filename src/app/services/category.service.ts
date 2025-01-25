import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:7039/api/';


  constructor(private httpClient: HttpClient) { }

   getCategories():Observable<ListResponseModel<Category>> {
    let newPath=this.apiUrl+"categories/getall"
     return this.httpClient
        .get<ListResponseModel<Category>>(newPath)
       
        }

        add(category:Category):Observable<any>{
          return this.httpClient.post(this.apiUrl+"categories/addcategory",category)
        }
}
