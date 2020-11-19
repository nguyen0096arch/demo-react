import React, { useState } from 'react';

export const CarShopContext = React.createContext();

const initialCars = {
    car001: { name: 'Honda', price: 100 },
    car002: { name: 'BMW', price: 150 },
    car003: { name: 'Mercedes', price: 200 }
}

const CarShopProvider = (props) => {
    const [cars, setCars] = useState(initialCars);

    const handleIncrementCarPrice = (carIndex) => {
        cars[carIndex].price += 10;
        setCars({...cars});
    }

    const handleDecrementCarPrice = (carIndex) => {
        cars[carIndex].price -= 10;
        setCars({...cars});
    }

    return (
        <CarShopContext.Provider
            value={{
                cars: cars,
                incrementCarPrice: handleIncrementCarPrice,
                decrementCarPrice: handleDecrementCarPrice,
            }}
        >
            {props.children}
        </CarShopContext.Provider>
    );
}

export default CarShopProvider;