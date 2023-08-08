import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entity/product.entity';
import { CreateProductDto } from '../dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async createProduct(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return await this.productRepository.save(product);
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { id },
    });
  }

  async findProductByName(name: string): Promise<Product | undefined> {
    return this.productRepository.findOne({ where: { name } });
  }

  async updateProductByName(
    name: string,
    updatedProduct: Product,
  ): Promise<Product> {
    const productToUpdate = await this.findProductByName(name);

    if (!productToUpdate) {
      throw new NotFoundException(`Product ${name} not found`);
    }

    await this.productRepository.update(productToUpdate.id, updatedProduct);
    return this.findOne(productToUpdate.id);
  }

  async deleteProduct(id: number): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }

  async getProductDetails(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }
}
