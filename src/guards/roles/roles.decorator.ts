import { SetMetadata } from "@nestjs/common";//SETmetadata to inject multiple values in decorator

export const ROLES_KEY = 'roles';//key for roles
export const Roles = (...roles:string[]) => SetMetadata(ROLES_KEY,roles);//it will take multiple roles and set metadata with key as roles and value as roles array