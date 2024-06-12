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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    //jsx
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );

    }
}
export default MyComponent;