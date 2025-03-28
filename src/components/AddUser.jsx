import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render() {
        return (
            <form>
                <input placeholder='Name' onChange={(e) => this.setState({firstname: e.target.value})} />
                <input placeholder='Surname' onChange={(e) => this.setState({lastname: e.target.value})} />
                <input placeholder='Age' onChange={(e) => this.setState({age: e.target.value})} />
                <textarea placeholder='Biography' onChange={(e) => this.setState({bio: e.target.value})} ></textarea>
                <label htmlFor="isHappy">
                    Do you have problems to solve?
                    <input type='checkbox' id='isHappy' onChange={(e) => this.setState({isHappy: e.target.checked})} />
                </label>
                
                <button type='button' onClick={()=> this.props.onAdd({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    bio: this.state.bio,
                    age: this.state.age,
                    isHappy: this.state.isHappy
                })}>Add user</button>
            </form>
        );
    }
    
}

export default AddUser;