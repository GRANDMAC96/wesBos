import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    // remember lowercase p and uppercase T 
    static propTypes = {
        addFish: PropTypes.func,
    }

    createFish = event => {
        // 1. stop form submitting
        event.preventDefault();
        // make our fish object
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value), // Here you can use the method parcefloat() for the price because it converts the string to a number. Its better than Number() because it converts a number followed by letters back to a number so there are fewer issues with this method. For example parceFloat("3eu") = 3, Number("3eu") = NaN.
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        // set state of fish using addFish() method in App.js. Remember the addFish() method has been passed down by props.
        this.props.addFish(fish);
        // Finally refresh the page
        // Here currentTarget refers to the form tag and the reset() method resets the form.
        // NB* state resets when you refresh the page.
        event.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="name" ref={this.nameRef} required />
                <input name="price" type="text" placeholder="price" ref={this.priceRef} required />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!!</option>
                    <option value="unavailable">Sold Out!!</option>
                </select>
                <textarea name="desc" placeholder="desc" ref={this.descRef}></textarea>
                <input name="image" type="text" placeholder="image" ref={this.imageRef} />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;