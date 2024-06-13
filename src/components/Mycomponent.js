import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "hoi dan it", age: "16" },
            { id: 2, name: "minh", age: "22" },
            { id: 3, name: "Hong Minh", age: "92" }
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log(">>>check data from parent:", userObj)
        this.setState({
            //listUsers: [userObj, ...this.state.listUsers]
            listUsers: [...this.state.listUsers, userObj]
        })
    }

    //jsx
    render() {
        //DRY:don't repeat yourself
        return (
            <>
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}

                    />
                    <br /><br />
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                    />
                </div >

                <div className="b">

                </div>
            </>
        );

    }
}
export default MyComponent;