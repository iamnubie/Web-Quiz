import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Minh',
        address: 'Hoi Dan IT',
        age: 22
    };

    //jsx
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );

    }
}
export default MyComponent;