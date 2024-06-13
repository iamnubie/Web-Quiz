import React from "react";

class DisplayInfor extends React.Component {
    render() {
        //destructuring array
        const { listUsers } = this.props;//object
        console.log(listUsers)
        //props => viet tat properties
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default DisplayInfor;