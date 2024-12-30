import { Expense } from "./expense"
import { MarketItem } from "./marketItem"

export interface ExpenseItem{
    id:number
    expenseId:number
    expense:Expense[]
    marketItemId:number
    marketItem:MarketItem[]
    quantity:number
    totalPrice:number
    
}