import React, { useEffect, useState } from 'react';
import { FlatCard } from '../../components/FlatCard';
import { Navbar } from '../../components/Navbar';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomeContainer } from './style';
import api from '../../services/api';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    brand: Brand;
}

interface Brand {
    id: string;
    name: string;
    image?: string;
}

export function Home() {
    const [carouselItemSelected, setCarouselItemSelected] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api.get("/products/latest").then(response => {
            setProducts(response.data);
        })
    }, []);

    function onFlatCardSelect(itemSelected: number): void {
        setCarouselItemSelected(itemSelected);
    }

    return (
        <HomeContainer>
            <Navbar />

            <main>
                {
                    products.length === 0 ? (
                        <p className='text-light-300 font-semibold'>Carregando...</p>
                    ) : (
                        <>
                            <div className="page-content">
                                <div className="content-container">
                                    <h1 className='product-name-title'>{products[carouselItemSelected].name}</h1>
                                    <p className='price text-primary-300'>R${products[carouselItemSelected].price.toFixed(2)}</p>
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
                                                    <div key={product.id}>
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
                                                brandImageURL={product.brand.image}
                                                itemNumber={index}
                                                isSelected={carouselItemSelected === index}
                                                onFlatCardSelect={onFlatCardSelect}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </>
                    )
                }
            </main>
        </HomeContainer>
    )
}