import { Category } from "./category"
import { ExpenseItem } from "./expenseItem"
import { FamilyPerson } from "./familyPerson"

export interface Expense{
    id:number
    date:Date
    totalAmount:number
    description:string
    familyPersonId:number
    familyPerson:FamilyPerson[]
    categoryId:number
    category:Category[]
    startDate:Date
    endDate:Date
    expenseItems:ExpenseItem[]
    
}