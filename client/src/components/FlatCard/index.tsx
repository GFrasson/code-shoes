import React from "react";
import { FlatCardContainer } from "./styles";

export function FlatCard() {
    return (
        <FlatCardContainer>
            <button className="card-container">
                <div className="images-container">
                    <img className='brand-image' src="../../../public/img/brands/nike.png" alt="Imagem da marca do tênis" />
                    <img className="shoe-image" src="../../../public/img/products/nike-blue.png" alt="Imagem de um tênis" />    
                </div>
                <div className="content-box">
                    <div className="content">
                        <div className="title">Nike - Blue</div>
                        <small className="price">R$199,90</small>
                    </div>
                </div>
            </button>
        </FlatCardContainer>
    );
}