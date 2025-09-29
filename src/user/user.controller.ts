import { Controller,Get } from '@nestjs/common';

@Controller('user')//Decorator
export class UserController {
    @Get()
    getUser(){
        return "user data fetched successfully";
    }
}
