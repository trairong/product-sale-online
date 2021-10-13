import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SQLconfig } from './database/database.providers.config';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [TypeOrmModule.forRoot(SQLconfig), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
