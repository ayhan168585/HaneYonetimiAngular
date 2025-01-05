import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { MarketItemPhoto } from '../models/marketItemPhoto';

@Injectable({
  providedIn: 'root'
})
export class MarketItemPhotoService {
  apiUrl="https://localhost:7039/api/"


  constructor(private httpClient:HttpClient) { }

  getMarketItemPhotos():Observable<ListResponseModel<MarketItemPhoto>>{
    let newPath=this.apiUrl+"marketitemphotos/getall"
    return this.httpClient.get<ListResponseModel<MarketItemPhoto>>(newPath)
  }
}
