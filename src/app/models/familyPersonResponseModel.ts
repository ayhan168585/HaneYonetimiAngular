import { FamilyPerson } from "./familyPerson";
import { ResponseModel } from "./responseModel";

export interface FamilyPersonResponseModel extends ResponseModel{
    data:FamilyPerson[]
}