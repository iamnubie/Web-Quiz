import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

//stateless vs stateful
// class DisplayInfor extends React.Component {

//     render() {
//         console.log('>>>call me render')
//         //destructuring array
//         const { listUsers } = this.props;//object
//         //props => viet tat properties

//         //template + logic js
//         return (
//             <div className='display-infor-container'>

//                 {true &&
//                     <div>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div>
//                                         <div style={{ color: 'blueviolet' }}>My name is {user.name}</div>
//                                         <div>My age is {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )

//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;//object

    return (
        <div className='display-infor-container'>

            {true &&
                <div>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div style={{ color: 'blueviolet' }}>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )

                    })}
                </div>
            }
        </div>
    )

}
export default DisplayInfor;