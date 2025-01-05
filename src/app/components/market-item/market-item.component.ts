import { Component, OnInit } from '@angular/core';
import { MarketItem } from '../../models/marketItem';
import { MarketItemService } from '../../services/market-item.service';

@Component({
  selector: 'app-market-item',
  standalone: false,
  
  templateUrl: './market-item.component.html',
  styleUrl: './market-item.component.css'
})
export class MarketItemComponent implements OnInit {
  constructor(private marketItemService:MarketItemService){}
  marketItems:MarketItem[]
  ngOnInit(): void {
    this.getMarketItems()
  }
  getMarketItems(){
    this.marketItemService.getMarketItems().subscribe(response=>{
      this.marketItems=response.data
    })
  }

}
