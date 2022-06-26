import { Product } from "@prisma/client";

import { prisma } from "../../../../database/prisma";
import {
    ICreateProductDTO,
    IProductsListOptions,
    IProductsRepository,
    IProductWithBrand,
} from "../IProductsRepository";

class ProductsRepository implements IProductsRepository {
    private static INSTANCE: ProductsRepository;

    private constructor() {}

    public static getInstance() {
        if (!ProductsRepository.INSTANCE) {
            ProductsRepository.INSTANCE = new ProductsRepository();
        }

        return ProductsRepository.INSTANCE;
    }

    async list(options?: IProductsListOptions): Promise<IProductWithBrand[]> {
        const products = await prisma.product.findMany({
            include: {
                brand: true,
            },
            orderBy: {
                createdAt: "desc",
            },
            ...options,
        });

        return products;
    }

    async findById(id: string): Promise<Product> {
        const product = await prisma.product.findUnique({
            where: {
                id,
            },
            include: {
                brand: true,
            },
        });

        return product;
    }

    async findByName(name: string): Promise<Product> {
        const product = await prisma.product.findUnique({
            where: {
                name,
            },
            include: {
                brand: true,
            },
        });

        return product;
    }

    async create({ name, price, brandId, image }: ICreateProductDTO): Promise<Product> {
        const product = await prisma.product.create({
            data: {
                name,
                price,
                brandId,
                image,
            },
            include: {
                brand: true,
            },
        });

        return product;
    }
}

export { ProductsRepository };
