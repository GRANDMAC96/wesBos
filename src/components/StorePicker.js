import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();
    // constructor() {
    //     // Can't run anything in a contructor before calling super(), its essentially runs the component.
    //     super();
    //     // Must bind this so that the instance of StorePicker can be accessed.
    //     this.goToStore = this.goToStore.bind(this);
    //     // This way or binding isn't ideal becuase for every method you create you need to bind it in the constructor and so the constructor becomes very big.
    // }

    // In summary, if you want to access "this" you either need to bind it through the instructor or you use the syntax written below. Here we declare a property of the class instead of a method.

    goToStore = event => {
        // 1. stop form from submitting
        event.preventDefault();
        // 2. get text from input. Here "current" is react thing (its part of the object) and "value" is a javascript thing.
        const storeName = this.myInput.current.value;
        // 3. change the page to /store/whatever they entered. 
        // NB* we don't want to refresh the page, just change the url. We need to access React Router.
        this.props.history.push(`/store/${storeName}`);
        // note how fast the change is when you go back and forward in the browser. This is because you are not reloading the page, you are just using something called push state.
    }


    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                {/* this is a Store Picker */}
                <h1>Please enter a Store</h1>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;

