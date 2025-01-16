import { Expense } from "./expense"
import { MarketItem } from "./marketItem"

export interface ExpenseItem{
    id:number
    expenseId:number   
    marketItemId:number  
    quantity:number
    totalPrice:number
    
}