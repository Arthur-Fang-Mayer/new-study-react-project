import React, { Component } from 'react';
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";

class User extends Component {
    user = this.props.user
    render() {
        return (
            <div className='user' >
                
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <div className="icons">
                    <FaUserEdit className='edit-icon' />
                    <TiUserDelete className='delete-icon' />
                </div>
                
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? 'All good :)' : 'Problems, need help :('}</b>
            </div>
        );
    }
    
}

export default User;