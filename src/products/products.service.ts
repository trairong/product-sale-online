import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IResponse } from 'src/interfaces/response';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { ProductEntity } from '../database/entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private prodcutRepository: Repository<ProductEntity>,
  ) {}

  public async postProduct(body: ProductDto) {
    console.log(body);
    try {
      const product = new ProductEntity();
      product.p_name = body.p_name;
      product.p_type = body.p_type;
      product.p_color = body.p_color;
      product.p_size = body.p_size;
      product.p_price = body.p_price;
      product.p_qty = body.p_qty;
      product.p_detail = body.p_detail;

      this.prodcutRepository.save(product);

      return ({
        results: true,
        statusCode: HttpStatus.OK,
        statusMessages: 'เพิ่มข้อมูลสำเร็จ',
        data: product,
      } as unknown) as IResponse;
    } catch (error) {
      throw new HttpException(
        {
          result: false,
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          statusMessage: 'NET WORK ERROR',
        } as IResponse,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
