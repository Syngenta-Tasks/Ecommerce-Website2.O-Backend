import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../entity/product.entity';
import { CreateProductDto } from '../dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Patch(':name') 
  async updateProductByName(
    @Param('name') name: string, 
    @Body() updatedProduct: Product,
  ): Promise<Product> {
    return this.productService.updateProductByName(name, updatedProduct);
  }


  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    await this.productService.deleteProduct(id);
  }

  @Get(':id')
  getProductDetails(@Param('id') id: number): Promise<Product> {
    return this.productService.getProductDetails(id);
  }
}
