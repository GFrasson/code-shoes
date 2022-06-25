import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import { Product } from '../../pages/Products';
import { WideCardContainer } from './style';

interface WideCardProps {
    product: Product;
    onRemoveFromCart: (product: Product) => void;
}

export function WideCard({ product, onRemoveFromCart }: WideCardProps) {
    return (
        <WideCardContainer>
            <div className="images-container">
                <img className='brand-image' src={product.brand.image} alt="Imagem da marca do tênis" />
                <img className="shoe-image" src={product.image} alt="Imagem de um tênis" />
            </div>
            <div className="content-box">
                <div className="content">
                    <div className="title">{ product.name }</div>
                    <small className="price">R${ product.price.toFixed(2) }</small>
                </div>
            </div>
            <div className="cart-button-container">
                <button 
                    className='cart-button'
                    onClick={() => onRemoveFromCart(product)}
                >
                    <ShoppingCart size={16} />
                    <span>Remover</span>
                </button>
            </div>
        </WideCardContainer>
    );
}