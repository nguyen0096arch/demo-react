import Car from './Car';

import { CarShopContext } from '../../../providers/CarShop';

const Cars = props => (
    <CarShopContext.Consumer>
        {(context) => (
            <>
                <h4>Cars:</h4>
                {/* Finally we can use data */}
                {Object.keys(context.cars).map(carID => (
                    <Car
                        key={carID}
                        name={context.cars[carID].name}
                        price={context.cars[carID].price}
                        incrementPrice={() => context.incrementCarPrice(carID)}
                        decrementPrice={() => context.decrementCarPrice(carID)}
                    />
                ))}
            </>
        )}
    </CarShopContext.Consumer>
);

export default Cars;