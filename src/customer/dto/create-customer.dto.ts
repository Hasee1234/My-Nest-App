// we will do validation of data that comes from frontendn throgh DTO
//DTO is data transfer object
//DTO is used to define how the data will be sent over the network
//we will create a class for DTO

import { IsInt, IsString } from "class-validator";


//we will use this class in controller to validate the data that comes from frontend
export class createCustomerDto{
    @IsString()
    name:string;//these validation dont work  at run time
    @IsInt()//so we use these pipe validation in main.ts file to use globally
    age:number;
}