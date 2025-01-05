import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  apiUrl = 'https://localhost:7039/api/';
  constructor(private httpClient: HttpClient) {}


  getExpenses(): Observable<ListResponseModel<Expense>> {
    let newPath = this.apiUrl + 'expenses/getall';
    return this.httpClient.get<ListResponseModel<Expense>>(newPath);
  }

  getExpensesByCategory(categoryId:number):Observable<ListResponseModel<Expense>>{
    let newPath=this.apiUrl+"Expenses/expensesforcategory?categoryId=" +categoryId
    return this.httpClient.get<ListResponseModel<Expense>>(newPath)
  }
}
