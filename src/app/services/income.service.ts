import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Income } from '../models/income';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  apiUrl="https://localhost:7039/api/"

  constructor(private httpClient:HttpClient) { }

  getIncomes():Observable<ListResponseModel<Income>>{
    let newPath=this.apiUrl+"incomes/getall"
    return this.httpClient.get<ListResponseModel<Income>>(newPath)
  }
}
