import { MarketItem } from "./marketItem";
import { ResponseModel } from "./responseModel";

export interface MarketItemResponseModel extends ResponseModel{
    data:MarketItem[]
}