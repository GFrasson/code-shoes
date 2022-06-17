import { ShoppingCart } from 'phosphor-react';
import React from 'react';
import { WideCardContainer } from './style';

export function WideCard() {
    return (
        <WideCardContainer>
            <div className="images-container">
                <img className='brand-image' src="../../../img/brands/nike.png" alt="Imagem da marca do tênis" />
                <img className="shoe-image" src="../../../img/products/nike-blue.png" alt="Imagem de um tênis" />
            </div>
            <div className="content-box">
                <div className="content">
                    <div className="title">Nike - Blue</div>
                    <small className="price">R$199,90</small>
                </div>
            </div>
            <div className="cart-button-container">
                <button className='cart-button'>
                    <ShoppingCart size={16} />
                    <span>Remover</span>
                </button>
            </div>
        </WideCardContainer>
    );
}