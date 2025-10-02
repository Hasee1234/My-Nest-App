import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}//this will inject your service of product in this controller
        @Get()
        @UseGuards(AuthGuard)//it will protect this route
        getProducts(){
            return this.productService.getAllProducts();
        }
    
        @Get(':id')
        getProduct(@Param('id') id:string){
            return this.productService.getProductbyId
            (Number(id));//it will covert string into number
        }
}
