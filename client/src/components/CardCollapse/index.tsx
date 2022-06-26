import React, { ReactNode, useState } from "react";
import { Plus, Minus, Pencil, Trash } from "phosphor-react";

import { CardCollapseContainer } from "./style";
import { Link } from "react-router-dom";

interface CardCollapseProps {
    brandId: string;
    brandName: string;
    brandImage?: string;
    products: Product[];
}

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

export function CardCollapse(props: CardCollapseProps) {
    const [isCardOpen, setIsCardOpen] = useState(false);

    return (
        <CardCollapseContainer className={`${isCardOpen && 'open'}`}>
            <div className="card-visible-content">
                <div className="w-28 h-16">
                    {
                        props.brandImage &&
                        <img className="brand-image" src={ props.brandImage } alt={`Logo da marca ${props.brandName}`} />
                    }
                </div>

                <div className="title-container">
                    <h2 className="text-center">{props.brandName}</h2>
                </div>

                <div className="flex justify-center text-dark-500 actions sm:col-span-1">
                    <Link to={`brands/${props.brandId}/edit`}>
                        <Pencil size={20} />
                    </Link>
                    <Link className="ml-2" to="">
                        <Trash size={20} />
                    </Link>
                    <div className="collapse-button-container">
                        <button
                            className="collapse-button"
                            onClick={() => setIsCardOpen(!isCardOpen)}
                        >
                            {
                                isCardOpen ? <Minus size={16} /> : <Plus size={16} />
                            }
                        </button>
                    </div>
                </div>
            </div>

            <div className="card-hidden-content">
                <div className="bg-light-300 shadow overflow-hidden sm:rounded-b-[0.625rem]">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Produtos</h3>
                    </div>
                    <div className="border-t border-gray-300">
                        <dl>
                            {
                                props.products.map((product) => {
                                    return (
                                        <div key={product.id} className="px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 justify-items-center grid-align">
                                            <img className="h-14 w-14 object-contain sm:col-span-1" src={product.image} alt="Imagem de um tênis" />
                                            <dt className="text-sm font-medium text-dark-300 sm:col-span-1">{product.name}</dt>
                                            <dd className="mt-1 text-sm text-dark-500 sm:mt-0 sm:col-span-1">R${product.price.toFixed(2)}</dd>
                                            <div className="flex justify-center text-dark-500 actions sm:col-span-1">
                                                <Link to={`products/${product.id}/edit`}>
                                                    <Pencil size={20} />
                                                </Link>
                                                <Link className="ml-2" to="">
                                                    <Trash size={20} />
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </dl>
                    </div>
                </div>
            </div>
        </CardCollapseContainer>
    );
}