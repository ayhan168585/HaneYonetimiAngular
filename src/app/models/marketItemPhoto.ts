import { MarketItem } from "./marketItem"

export interface MarketItemPhoto{
    id:number
    marketItemId:number
    marketItem:MarketItem
    filePath:string
    uploadedAt:Date
}