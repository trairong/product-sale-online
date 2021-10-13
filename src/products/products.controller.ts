import { Body, Controller, Post } from '@nestjs/common';
import { IResponse } from '../interfaces/response';
import { ProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}
    @Post()
    public async postProduct(@Body() body: ProductDto): Promise<IResponse> {
      const res = await this.productService.postProduct(body);
      console.log('controller post ,.....', res);
      return res;
    }
}
