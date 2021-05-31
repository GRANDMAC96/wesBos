import React from "react";
import PropTypes, { shape } from "prop-types";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    // There is more documentation about proptypes online on react's website
    // Here shape is a function that accepts an object where we can specify what goes inside it.
    static propTypes = {
        details: shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string,
            desc: PropTypes.string,
        }),
        addToOrder: PropTypes.func,
    }
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