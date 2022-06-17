import React from 'react';
import { CardContainer } from './style';
import { ShoppingCart } from 'phosphor-react';

interface cardProps {
    name: string;
    brand: string;
    price: number;
}

export function Card({ name, brand, price }: cardProps) {
    return (
        <CardContainer>
            <div className="images-container">
                <img className='logo-image' src="../../../img/brands/nike.png" alt="Imagem da marca do tênis" />
                <img className="shoe-image" src="../../../img/products/nike-blue.png" alt="Imagem de um tênis" />
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