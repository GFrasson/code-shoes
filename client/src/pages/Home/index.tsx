import React from 'react';
import { FlatCard } from '../../components/FlatCard';
import { Navbar } from '../../components/Navbar';
import { HomeContainer } from './style';

export function Home() {
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
                        
                    </div>
                </div>
                <div className="flat-cards-container">
                    <FlatCard />
                    <FlatCard />
                    <FlatCard />
                </div>
            </main>
        </HomeContainer>
    )
}