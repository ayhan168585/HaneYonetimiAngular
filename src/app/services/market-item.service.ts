import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { MarketItem } from '../models/marketItem';

@Injectable({
  providedIn: 'root'
})
export class MarketItemService {
   apiUrl="https://localhost:7039/api/"

  constructor(private httpClient:HttpClient) { }

  getMarketItems():Observable<ListResponseModel<MarketItem>>{
    let newPath=this.apiUrl+"marketitems/marketitemlists"
    return this.httpClient.get<ListResponseModel<MarketItem>>(newPath)
  }
}
