interface IRequest {
    name: string;
}

class UpdateBrandUseCase {
    constructor(private repository) {}

    async execute({}: IRequest): Promise<void> {
        // ...
    }
}

export { UpdateBrandUseCase };
