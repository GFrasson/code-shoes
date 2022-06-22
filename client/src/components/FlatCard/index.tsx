import React, { useState } from "react";
import { FlatCardContainer } from "./styles";

interface FlatCardProps {
    productName: string;
    productPrice: number;
    productImageURL: string;
    brandImageURL: string;
    itemNumber: number;
    isSelected: boolean;
    onFlatCardSelect: (itemSelected: number) => void;
}

export function FlatCard(props: FlatCardProps) {
    return (
        <FlatCardContainer>
            <button
                className={`card-container ${props.isSelected && "active"}`}
                onClick={() => props.onFlatCardSelect(props.itemNumber)}
            >
                <div className="images-container">
                    <img className='brand-image' src={props.brandImageURL} alt="Imagem da marca do tênis" />
                    <img className="shoe-image" src={props.productImageURL} alt="Imagem de um tênis" />    
                </div>
                <div className="content-box">
                    <div className="content">
                        <div className="title">{ props.productName }</div>
                        <small className="price">R${ props.productPrice.toFixed(2) }</small>
                    </div>
                </div>
            </button>
        </FlatCardContainer>
    );
}