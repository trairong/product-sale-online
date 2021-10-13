import { ApiPropertyOptional } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id?: number;

  @Column({ name: 'p_name', type: 'varchar', length: 255 })
  p_name: string;
  
  @Column({ name: 'p_type', type: 'varchar', length: 255 })
  p_type: string;

  @Column({ name: 'p_color', type: 'varchar', length: 255 })
  p_color: string;

  @Column({ name: 'p_size', type: 'varchar', length: 255 })
  p_size: string;

  @Column({ name: 'p_price', type: 'bigint'})
  p_price: string;

  @Column({ name: 'p_qty', type: 'int' })
  p_qty: number;

  @Column({ name: 'p_detail', type: 'text'})
  p_detail: string;
}
