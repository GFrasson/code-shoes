import { Product } from "@prisma/client";

import { prisma } from "../../../../database/prisma";
import { ICreateProductDTO, IProductsRepository } from "../IProductsRepository";

class ProductsRepository implements IProductsRepository {
    private static INSTANCE: ProductsRepository;

    private constructor() {}

    public static getInstance() {
        if (!ProductsRepository.INSTANCE) {
            ProductsRepository.INSTANCE = new ProductsRepository();
        }

        return ProductsRepository.INSTANCE;
    }

    async list(): Promise<Product[]> {
        const products = await prisma.product.findMany();
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

    async create({ name, price, brandId }: ICreateProductDTO): Promise<Product> {
        const product = await prisma.product.create({
            data: {
                name,
                price,
                brandId,
            },
            include: {
                brand: true,
            },
        });

        return product;
    }
}

export { ProductsRepository };