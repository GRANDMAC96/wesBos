import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    // Can use a handleClick method below with the button but often theres no need to if the function only does one thing.
    // Therefore I just wrote the function inline
    // handleClick = () => {
    //     this.props.addToOrder(this.props.index);
    // }

    render() {

        const { image, name, price, status, desc } = this.props.details;

        const isAvailable = status === "available";

        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={() => { this.props.addToOrder(this.props.index) }}>
                    {isAvailable ? 'Add to Order' : "Sold Out!"}
                </button>
            </li>
        )
    }
}

export default Fish;