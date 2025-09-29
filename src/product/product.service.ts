import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products=[
        {id:1,name:"sooper",price:40},
        {id:2,name:"cocomo",price:50},
        {id:3,name:"Prince",price:40},
    ];
    getAllProducts(){
        return this.products;//this.products means retuen products of this class
    }
    getProductbyId(Id:number){
        return this.products.find((product)=>product.id===Id);
    }
}
