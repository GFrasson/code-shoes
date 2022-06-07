interface IRequest {
    
}

class ListProductsUseCase {
    constructor(private repository) {}

    execute({  }: IRequest): void {
        // ...
    }
}

export { ListProductsUseCase };
