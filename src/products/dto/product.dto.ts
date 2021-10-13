import { ApiPropertyOptional } from "@nestjs/swagger";

export class ProductDto {
  id?: number;

  @ApiPropertyOptional({ type: String, example: 'nike 218' })
  p_name: string;

  @ApiPropertyOptional({ type: String, example: 'เสื้อผ้า' })
  p_type: string;

  @ApiPropertyOptional({ type: String, example: 'แดง' })
  p_color: string;

  @ApiPropertyOptional({ type: String, example: 'L' })
  p_size: string;

  @ApiPropertyOptional({ type: String, example: '2000' })
  p_price: string;

  @ApiPropertyOptional({ type: Number, example: 5 })
  p_qty: number;

  @ApiPropertyOptional({ type: String, example: 'ใส่สบาย' })

  p_detail: string;
}
