import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastname: 'Marley',
                    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dignissimos porro fugiat dolorem repellendus unde',
                    age: 40,
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'John',
                    lastname: 'Doe',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, at!',
                    age: 22,
                    isHappy: false
                }
            ]
        }

        this.addUser = this.addUser.bind(this)
    }
    render() { 
        return(
            <div className="content">
                <Header title="User - list"/>
                <main>
                  <Users users={this.state.users} />
                </main>
                <aside>
                    <h3>You can add new users here:</h3>
                    <AddUser onAdd={this.addUser} />
                </aside>    
            </div>
        )   
    }   

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({users: [...this.state.users, {id, ...user}]})
    }
}

export default App;

