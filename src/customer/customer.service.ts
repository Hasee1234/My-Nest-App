import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer-interface'; 
import { createCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = []; //customer is Customer type which we defined in customer-interface that it will have id ,name,age

    getAllCustomers():Customer[]{
        return this.customers;
    }

    addCustomer(createCustomerDto:createCustomerDto):
    Customer{
        const newCustomer:Customer = {
            id:Date.now(),
            ...createCustomerDto,
        };
        this.customers.push(newCustomer);//it will push new customer in customer array
        return newCustomer;
    }
}