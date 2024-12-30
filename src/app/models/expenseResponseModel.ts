import { Expense } from "./expense";
import { ResponseModel } from "./responseModel";

export interface ExpenseResponseModel extends ResponseModel{
    data:Expense[]
}