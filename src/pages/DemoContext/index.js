import React from "react";
import ProductList from "./CarShop/ProductList";

import CarShopProvider from './../../providers/CarShop';

function ReactDemo() {
    return (
        <div>
            <CarShopProvider>
                <h2>React Shop</h2>
                <p>A counter demo that uses React Context</p>
                <ProductList />
            </CarShopProvider>
        </div>
    );
}

export default ReactDemo;