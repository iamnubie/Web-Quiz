import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "hoi dan it", age: "16" },
//             { id: 2, name: "minh", age: "22" },
//             { id: 3, name: "Hong Minh", age: "92" }
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         console.log(">>>check data from parent:", userObj)
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//             //listUsers: [...this.state.listUsers, userObj]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }

//     //jsx
//     render() {
//         //DRY:don't repeat yourself

//         return (
//             <>
//                 <br />
//                 <div className="a">
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br /><br />
//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div >

//                 <div className="b">

//                 </div>
//             </>
//         );

//     }
// }

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "hoi dan it", age: "16" },
            { id: 2, name: "minh", age: "22" },
            { id: 3, name: "Hong Minh", age: "92" }
        ]
    );

    const handleAddNewUser = (userObj) => {
        console.log(">>>check data from parent:", userObj)
        setListUsers([userObj, ...listUsers])

        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        //     //listUsers: [...this.state.listUsers, userObj]
        // })
    }
    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone)

        // this.setState({
        //     listUsers: listUsersClone
        // })
    }
    return (
        <>
            <br />
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br /><br />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div >

            <div className="b">

            </div>
        </>
    )
}
export default MyComponent;