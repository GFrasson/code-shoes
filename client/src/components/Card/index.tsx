import React from 'react';
import { CardContainer } from './style';
import { ShoppingCart } from 'phosphor-react';
import { Product } from '../../pages/Products';

interface cardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export function Card({ product, onAddToCart }: cardProps) {
    return (
        <CardContainer>
            <div className="images-container">
                <img className='logo-image' src={product.brand.image} alt="Imagem da marca do tênis" />
                <img className="shoe-image" src={product.image} alt="Imagem de um tênis" />
            </div>
            <div className="content-box">
                <div className="content">
                    <div className="title">{ product.name }</div>
                    <small className="price">R${ product.price.toFixed(2) }</small>
                </div>
            </div>
            <button 
                className='cart-button' 
                onClick={() => onAddToCart(product)}
            >
                <ShoppingCart size={16} />
                <span>+ Carrinho</span>
            </button>
        </CardContainer>
    );
}