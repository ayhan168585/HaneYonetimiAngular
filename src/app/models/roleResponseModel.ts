import { ResponseModel } from "./responseModel";
import { Role } from "./role";

export interface RoleResponseModel extends ResponseModel{
    data:Role[]
}