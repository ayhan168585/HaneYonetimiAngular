import { Component, OnInit } from '@angular/core';
import { MarketItem } from '../../models/marketItem';
import { MarketItemService } from '../../services/market-item.service';
import { CategoryService } from '../../services/category.service';
import { UnitService } from '../../services/unit.service';
import { Category } from '../../models/category';
import { Unit } from '../../models/unit';

@Component({
  selector: 'app-market-item',
  standalone: false,

  templateUrl: './market-item.component.html',
  styleUrl: './market-item.component.css',
})
export class MarketItemComponent implements OnInit {
  constructor(
    private marketItemService: MarketItemService,
    private categoryService: CategoryService,
    private unitService: UnitService
  ) {}
  marketItems: MarketItem[];
  categories:Category[]
  units:Unit[]
  ngOnInit(): void {
    this.getMarketItems();
    this.getCategories()
    this.getUnits();
  }
  getMarketItems() {
    this.marketItemService.getMarketItems().subscribe((response) => {
      this.marketItems = response.data;
    });
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data
    })
  }
  getUnits(){
    this.unitService.getUnits().subscribe(response=>{
      this.units=response.data
    })
  }
  
}
