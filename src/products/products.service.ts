import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './create-pdoduct.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { UpdateProductDto } from './update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  private products = [];

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async create(productsDto: CreateProductDto) {
    const newProduct = new this.productModel(productsDto);
    return newProduct.save();
  }
  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }
  async update(id: string, productDto: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
  }
}
