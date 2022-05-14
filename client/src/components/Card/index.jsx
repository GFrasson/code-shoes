import React from 'react'
import './style.css'

export function Card(props) {
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
            <span className="p-name">{props.name}</span>
            <span className="p-company">{props.brand}</span>
          </div>
        </div>
      </div>

      <div className="box-down">
        <div className="h-bg">
          <div className="h-bg-inner"></div>
        </div>

        <a className="cart" href="#">
          <span className="price">R${props.price}</span>
          <span className="add-to-cart">
            <span className="txt">Adicionar ao carrinho</span>
          </span>
        </a>
      </div>
    </div>
  );
}