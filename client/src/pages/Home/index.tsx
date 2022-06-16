import React, { useState } from 'react';
import { FlatCard } from '../../components/FlatCard';
import { Navbar } from '../../components/Navbar';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomeContainer } from './style';

export function Home() {
    const [carouselItemSelected, setCarouselItemSelected] = useState(0);

    function onFlatCardSelect(itemSelected: number): void {
        setCarouselItemSelected(itemSelected);
    }

    return (
        <HomeContainer>
            <Navbar />

            <main>
                <div className="page-content">
                    <div className="content-container">
                        <h1 className='product-name-title'>Tênis Nike - Running</h1>
                        <p className='price text-primary-300'>R$199,90</p>
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
                            <div>
                                <img src="../../../public/img/products/nike-blue.png" />
                            </div>
                            <div>
                                <img src="../../../public/img/products/nike-blue.png" />
                            </div>
                            <div>
                                <img src="../../../public/img/products/nike-blue.png" />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="flat-cards-container">
                    <FlatCard 
                        itemNumber={0}
                        isSelected={carouselItemSelected === 0}
                        onFlatCardSelect={onFlatCardSelect}
                    />
                    <FlatCard
                        itemNumber={1}
                        isSelected={carouselItemSelected === 1}
                        onFlatCardSelect={onFlatCardSelect}
                    />
                    <FlatCard
                        itemNumber={2}
                        isSelected={carouselItemSelected === 2}
                        onFlatCardSelect={onFlatCardSelect}
                    />
                </div>
            </main>
        </HomeContainer>
    )
}