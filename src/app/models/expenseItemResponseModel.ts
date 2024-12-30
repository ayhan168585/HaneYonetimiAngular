import { ExpenseItem } from "./expenseItem";
import { ResponseModel } from "./responseModel";

export interface ExpenseItemResponseModel extends ResponseModel{
    data:ExpenseItem[]
}