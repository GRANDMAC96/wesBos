import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    // Lifecycle methods
    // this ref is different to the inputs we have in our app. This ref refers to the database in firebase.

    componentDidMount() {
        const { params } = this.props.match;

        // first reinstate local storage
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    // We need to use componentDidUpdate() becuase it runs whenever someone updates something, its not called for the initial render

    componentDidUpdate() {
        // how do we set this.state.order (the state of the order) in our local storage
        // We want to set the order for that particular store so we do what did in componentDidMount() and get hold of the particular store via the storeId
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
        // The only issue with this is that when you refresh the page componentDidMount() runs which changes state.
        // This then triggers componentDidUpdate()
    }

    // If you go back and into another store you've created two stores. If your user does this then you never clean up what was present at a particular store...
    // therefore we use another lifecycle method

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    // We can't add to state in through each individual component.
    // Any function that updates state needs to live in the same component where state lives. Which as you can see, state lives above this line.

    addFish = fish => {
        // Options you may think would work to add things to state
        // this.state.fishes.push(fish) for an array
        // this.state.fishes.fish1 = fish for an object
        // Neither work!!

        // Instead you need to use setState()
        // 1. take a copy of existing state
        const fishes = { ...this.state.fishes };
        // 2. add our new fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. set the new fishes object to state
        this.setState({
            fishes: fishes
        });
    };

    updateFish = (key, updatedFish) => {
        // 1. Take copy of the current state
        const fishes = { ...this.state.fishes };
        // 2. Update that state
        fishes[key] = updatedFish;
        // 3. Set that to state
        this.setState({
            fishes: fishes
        })
    }

    deleteFish = () => {
        // take a copy of state
        const fishes = { ...this.state.fishes }
        // update the state
        // this is a slightly odd was of doing it but this works with firebase
        fishes[key] = null;
        // update state
        this.setState({
            fishes: fishes
        })
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    };

    addToOrder = (key) => {
        // 1. take a copy of existing state
        const order = { ...this.state.order };
        // Either add to order or update the order
        // If this particular fish exists in your order then it adds 1 or it just returns 1. The or operator (||) is used to create this logic 
        order[key] = order[key] + 1 || 1
        // Call setState() to update our state object
        this.setState({
            order: order
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Catch of the Day" />
                    <ul className="fishes">
                        {/* Object.keys turns the fishes object into an array which you can loop over */}
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                index={key}
                                key={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order
                    {...this.state}
                ></Order>
                <Inventory
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                ></Inventory>
            </div>
        );
    }
}

export default App;