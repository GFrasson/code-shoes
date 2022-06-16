import React from 'react';
import './style.css';

interface cardProps {
  name: string;
  brand: string;
  price: number;
}

export function Card({ name, brand, price }: cardProps) {
  return (
    <div className="el-wrapper">
      <div className="box-up">
        <img
          className="img"
          src="https://m.media-amazon.com/images/I/81W9dIVSmuL._AC_SX695_.jpg"
          alt=""
        />
        <div className="img-info">
          <div className="info-inner">
            <span className="p-name">{name}</span>
            <span className="p-company">{brand}</span>
          </div>
        </div>
      </div>

      <div className="box-down">
        <div className="h-bg">
          <div className="h-bg-inner"></div>
        </div>

        <a className="cart" href="#">
          <span className="price">R${price}</span>
          <span className="add-to-cart">
            <span className="txt">Adicionar ao carrinho</span>
          </span>
        </a>
      </div>
    </div>
  );
}