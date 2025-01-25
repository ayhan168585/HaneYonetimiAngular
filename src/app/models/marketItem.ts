import { Category } from "./category"
import { ExpenseItem } from "./expenseItem"
import { MarketItemPhoto } from "./marketItemPhoto"

export interface MarketItem{
    id:number
    name:string
    price:number
    quantity:number
    categoryName:string   
    unitName:string  
  
}