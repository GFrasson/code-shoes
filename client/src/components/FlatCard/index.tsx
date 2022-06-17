import React, { useState } from "react";
import { FlatCardContainer } from "./styles";

interface FlatCardProps {
    itemNumber: number;
    isSelected: boolean;
    onFlatCardSelect: (itemSelected: number) => void;
}

export function FlatCard({ itemNumber, isSelected, onFlatCardSelect }: FlatCardProps) {
    return (
        <FlatCardContainer>
            <button
                className={`card-container ${isSelected && "active"}`}
                onClick={() => onFlatCardSelect(itemNumber)}
            >
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
            </button>
        </FlatCardContainer>
    );
}