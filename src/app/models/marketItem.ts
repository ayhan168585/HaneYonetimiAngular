import { Category } from "./category"
import { ExpenseItem } from "./expenseItem"
import { MarketItemPhoto } from "./marketItemPhoto"

export interface MarketItem{
    id:number
    name:string
    price:number
    quantity:number
    categoryId:number
    category:Category[]
    unitId:number
    marketItemPhoto:MarketItemPhoto[]
    expenseItem:ExpenseItem[]
}