import { Model } from 'mongoose';
import { CreateProductDto } from './create-pdoduct.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { UpdateProductDto } from './update-product.dto';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    private products;
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product>;
    create(productsDto: CreateProductDto): Promise<ProductDocument>;
    remove(id: string): Promise<Product>;
    update(id: string, productDto: UpdateProductDto): Promise<Product>;
}
