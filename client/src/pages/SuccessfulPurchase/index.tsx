import React from "react";

import { Navbar } from '../../components/Navbar';

import { CircleWavyCheck } from 'phosphor-react';
import { SuccessfulPurchaseContainer } from './style';

export function SuccessfulPurchase() {
    return (
        <SuccessfulPurchaseContainer>
            <Navbar />

            <main>
                <div className="success-container">
                    <h1>Compra realizada com sucesso!</h1>
                    <CircleWavyCheck size={150} />
                </div>
            </main>

        </SuccessfulPurchaseContainer>
    );
}