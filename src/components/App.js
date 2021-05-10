import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";


class App extends React.Component {
    state = {
        fishes: [],
        order: {}
    };

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

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Catch of the Day" />
                </div>
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                ></Inventory>
                <Order></Order>
            </div>
        );
    }
}

export default App;