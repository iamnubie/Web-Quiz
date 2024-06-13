import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "hoi dan it", age: "16" },
            { id: 2, name: "minh", age: "22" },
            { id: 3, name: "Hong Minh", age: "92" }
        ]
    }

    //jsx
    render() {
        //DRY:don't repeat yourself
        return (
            <div>

                <UserInfor />
                <br /><br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />

            </div>
        );

    }
}
export default MyComponent;