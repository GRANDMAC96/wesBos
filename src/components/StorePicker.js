import React from "react";

class StorePicker extends React.Component {
    render() {
        return (
            < form className="store-selector" >
                {/* this is a Store Picker */}
                <h1>Please enter a Store</h1>
                <input type="text" placeholder="Store Name"></input>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;

