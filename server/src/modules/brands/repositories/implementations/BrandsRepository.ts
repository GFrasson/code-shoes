import { Brand } from "@prisma/client";

import { prisma } from "../../../../database/prisma";
import { IBrandsRepository, ICreateBrandDTO } from "../IBrandsRepository";

class BrandsRepository implements IBrandsRepository {
    private static INSTANCE: BrandsRepository;

    private constructor() {}

    public static getInstance() {
        if (!BrandsRepository.INSTANCE) {
            BrandsRepository.INSTANCE = new BrandsRepository();
        }

        return BrandsRepository.INSTANCE;
    }

    async list(): Promise<Brand[]> {
        const brands = await prisma.brand.findMany();
        return brands;
    }

    async findById(id: string): Promise<Brand> {
        const brand = await prisma.brand.findUnique({
            where: {
                id,
            },
        });

        return brand;
    }

    async findByName(name: string): Promise<Brand> {
        const brand = await prisma.brand.findUnique({
            where: {
                name,
            },
        });

        return brand;
    }

    async create({ name, image }: ICreateBrandDTO): Promise<Brand> {
        const brand = await prisma.brand.create({
            data: {
                name,
                image,
            },
        });

        return brand;
    }
}

export { BrandsRepository };
