import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        // Before we return this list item we need to check if that fish is available 
        const isAvailable = fish.status === 'available';
        if (!isAvailable) {
            return <li key={key}> Sorry {fish ? fish.name : 'fish'} is no longer available!</li>
        }
        return (
            <li key={key}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
            </li>
        )
    };
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            // check if there is a fish and is the status of the fish is available
            const isAvailable = fish && fish.status === "available";
            // below the if statement says "if the fish is available/if isAvailable is true"
            if (isAvailable) {
                return prevTotal + count * fish.price;
            }
            return prevTotal;
            // don't forget to add a starting value, ours is 0.
        }, 0);

        return (
            <div className="order">
                <h2>Order!!!</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className="total">
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;