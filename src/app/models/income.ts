import { FamilyPerson } from "./familyPerson"

export interface Income{
    id:number
    familyPersonId:number
    amount:number
    date:Date
    description:string
    familyPerson:FamilyPerson[]
}