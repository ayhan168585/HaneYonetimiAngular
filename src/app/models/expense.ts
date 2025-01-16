import { Category } from "./category"
import { ExpenseItem } from "./expenseItem"
import { FamilyPerson } from "./familyPerson"

export interface Expense{
    expenseId:number
    date:Date
    totalAmount:number
    description:string
    familyPersonId:number   
    categoryId:number  
    startDate:Date
    endDate:Date
   
    
}