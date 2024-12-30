import { MarketItemPhoto } from "./marketItemPhoto";
import { ResponseModel } from "./responseModel";

export interface MarketItemPhotoResponseModel extends ResponseModel{
    data:MarketItemPhoto[]
}