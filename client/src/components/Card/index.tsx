import React from 'react';
import { CardContainer } from './style';
import { ShoppingCart } from 'phosphor-react';

interface Brand {
    id: string;
    name: string;
    image?: string;
}

interface cardProps {
    name: string;
    image: string;
    brand: Brand;
    price: number;
}

export function Card({ name, image, brand, price }: cardProps) {
    return (
        <CardContainer>
            <div className="images-container">
                <img className='logo-image' src={brand.image} alt="Imagem da marca do tênis" />
                <img className="shoe-image" src={image} alt="Imagem de um tênis" />
            </div>
            <div className="content-box">
                <div className="content">
                    <div className="title">{ name }</div>
                    <small className="price">R${ price.toFixed(2) }</small>
                </div>
            </div>
            <button className='cart-button'>
                <ShoppingCart size={16} />
                <span>+ Carrinho</span>
            </button>
        </CardContainer>
    );
}