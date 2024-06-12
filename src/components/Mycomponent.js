import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Minh',
        address: 'Hoi Dan IT',
        age: 22
    };

    handleClick(event) {
        console.log("click me on my button")
        //merge State => react class
        this.setState({
            name: 'Eric',
            age: Math.floor((Math.random() * 100) + 1)
        })
        // this.setState({

        // })
    }

    handleOnMover(event) {
        //console.log(event.pageX)
    }
    //jsx
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMover}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>

            </div>
        );

    }
}
export default MyComponent;