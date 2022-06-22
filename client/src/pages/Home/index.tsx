import React, { useState } from 'react';
import { FlatCard } from '../../components/FlatCard';
import { Navbar } from '../../components/Navbar';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomeContainer } from './style';

export function Home() {
    const [carouselItemSelected, setCarouselItemSelected] = useState(0);
    const products = [
        {
            id: '123',
            name: 'Nike - Blue',
            price: 199.90,
            image: '../../../img/products/nike-blue.png',
            brandImage: '../../../img/brands/nike.png'
        },
        {
            id: '1234',
            name: 'Nike - Red',
            price: 200.0,
            image: '../../../img/products/nike-blue.png',
            brandImage: '../../../img/brands/nike.png'
        },
        {
            id: '1235',
            name: 'Nike - Green',
            price: 150.0,
            image: '../../../img/products/nike-blue.png',
            brandImage: '../../../img/brands/nike.png'
        }
    ];

    function onFlatCardSelect(itemSelected: number): void {
        setCarouselItemSelected(itemSelected);
    }

    return (
        <HomeContainer>
            <Navbar />

            <main>
                <div className="page-content">
                    <div className="content-container">
                        <h1 className='product-name-title'>Tênis { products[carouselItemSelected].name }</h1>
                        <p className='price text-primary-300'>R${ products[carouselItemSelected].price.toFixed(2) }</p>
                    </div>
                    <div className="carousel-container">
                        <Carousel
                            className='carousel'
                            swipeable={true}
                            emulateTouch={true}
                            autoPlay={true}
                            interval={4000}
                            infiniteLoop={true}
                            onChange={(selected) => setCarouselItemSelected(selected)}
                            selectedItem={carouselItemSelected}
                            statusFormatter={(currentItem, total) => ''}
                            showArrows={false}
                            showThumbs={false}
                            showIndicators={false}
                        >
                            {
                                products.map(product => {
                                    return (
                                        <div>
                                            <img src={product.image} />
                                        </div>
                                    );
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="flat-cards-container">
                    {
                        products.map((product, index) => {
                            return (
                                <FlatCard 
                                    key={product.id}
                                    productName={product.name}
                                    productPrice={product.price}
                                    productImageURL={product.image}
                                    brandImageURL={product.brandImage}
                                    itemNumber={index}
                                    isSelected={carouselItemSelected === index}
                                    onFlatCardSelect={onFlatCardSelect}
                                />
                            );
                        })
                    }
                </div>
            </main>
        </HomeContainer>
    )
}