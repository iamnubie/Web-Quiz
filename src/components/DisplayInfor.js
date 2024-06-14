import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log('>>>call constructor: 1')
        super(props);
        //bable compiler
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('>>>call me component did mount')
        setTimeout(() => {
            document.title = 'Hong Minh & UTH'
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>>call me component did update', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('You got 5 users')
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log('>>>call me render')
        //destructuring array
        const { listUsers } = this.props;//object
        //props => viet tat properties

        //template + logic js
        return (
            <div className='display-infor-container'>
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list users:" : "Show list users:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <div style={{ color: 'blueviolet' }}>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}
export default DisplayInfor;