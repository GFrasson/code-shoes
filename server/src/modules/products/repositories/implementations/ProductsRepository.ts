import { Product } from "@prisma/client";

import { prisma } from "../../../../database/prisma";
import {
    ICreateProductDTO,
    IProductsListOptions,
    IProductsRepository,
    IProductWithBrand,
    IUpdateProductDTO,
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
            where: {
                AND: {
                    ...(options.search && {
                        name: {
                            contains: options.search,
                        },
                    }),
                    ...(options.brand && {
                        brandId: {
                            equals: options.brand,
                        },
                    }),
                },
            },
            ...(options.take && {
                take: options.take,
            }),
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

    async update({ id, name, price, image, brandId }: IUpdateProductDTO): Promise<Product> {
        const updatedProduct = await prisma.product.update({
            where: {
                id,
            },
            data: {
                name,
                price,
                image,
                brandId,
            },
        });

        return updatedProduct;
    }

    async delete(id: string): Promise<void> {
        await prisma.product.delete({
            where: {
                id,
            },
        });
    }
}

export { ProductsRepository };
