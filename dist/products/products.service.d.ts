import { CreateProductDto } from './create-pdoduct.dto';
export declare class ProductsService {
    private products;
    getAll(): any[];
    getById(id: string): any;
    create(productsDto: CreateProductDto): number;
}
