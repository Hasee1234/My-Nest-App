import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { createCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService:CustomerService){}

    //now we will create two routes one for get all customers and one for add customer
    //get all customers
    @Get()
    getCustomers(){
        return this.customerService.getAllCustomers();
    }

    //add customer
    @Post()
    addCustomer(@Body() createCustomerDto:createCustomerDto){
        return this.customerService.addCustomer(createCustomerDto);
    }
}
