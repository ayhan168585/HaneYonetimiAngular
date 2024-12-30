import { Income } from "./income";
import { ResponseModel } from "./responseModel";

export interface IncomeResponseModel extends ResponseModel{
    data:Income[]
}