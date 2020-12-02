import { CreateProductDto } from './create-pdoduct.dto';
import { UpdateProductDto } from './update-product.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getOne(id: string): any;
    create(createProductDto: CreateProductDto): number;
    remove(id: string): string;
    update(updateProductDto: UpdateProductDto, id: string): string;
    updateLocal(): void;
}
