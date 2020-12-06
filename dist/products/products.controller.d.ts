import { CreateProductDto } from './create-pdoduct.dto';
import { UpdateProductDto } from './update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAll(): Promise<Product[]>;
    getOne(id: string): Promise<Product>;
    create(createProductDto: CreateProductDto): Promise<import("./schemas/product.schema").ProductDocument>;
    remove(id: string): Promise<Product>;
    update(updateProductDto: UpdateProductDto, id: string): Promise<Product>;
    updateLocal(): void;
}
