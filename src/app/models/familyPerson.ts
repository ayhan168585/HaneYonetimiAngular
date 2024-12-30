import { Expense } from "./expense"
import { Income } from "./income"
import { Role } from "./role"

export interface FamilyPerson{
    id:number
    fullName:string
    email:string
    password:string
    profilPicture:string
    roleId:number
    role:Role[]
    expenses:Expense[]
    incomes:Income[]
    
}