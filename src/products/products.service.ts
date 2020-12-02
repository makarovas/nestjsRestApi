import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './create-pdoduct.dto';

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }
  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  create(productsDto: CreateProductDto) {
    return this.products.push({
      ...productsDto,
      id: Date.now().toString(),
    });
  }
}
