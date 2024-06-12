import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Minh',
        address: 'Hoi Dan IT',
        age: 22
    };

    handleClick(event) {
        console.log("click me on my button")
        console.log("My name is ", this.state.name)
    }
    handleOnMover(event) {
        console.log(event.pageX)
    }
    //jsx
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOnMover}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>

            </div>
        );

    }
}
export default MyComponent;