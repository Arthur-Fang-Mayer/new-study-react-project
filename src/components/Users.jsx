import React, { Component } from 'react';

class Users extends Component {
    users = [
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
    
    render() {
        if(this.users.length > 0)
            return (
                <div>
                    {this.users.map((el) => (<div className='user' key={el.id}>
                        <h3>{el.firstname} {el.lastname}</h3>
                        <p>{el.bio}</p>
                        <b>{el.isHappy ? 'All good :)' : 'Problems, need help :('}</b>
                    </div>))}
                </div>
            );
        else
        return (
            <div>
                <div className='user'>
                    <h3>There are no active users</h3>
                </div>
            </div>
            
        ); 
    }
    
}

export default Users;

/* метод map() позволяет перебрать массив */


/* (el) это элемент, через который я имею доступ к любому элементу массива*/
/* (el) => (<div key={el.id}> <h3>{el.firstname} {el.lastname}</h3> <p>{el.bio}</p> </div> описывает в каком виде будут выводится элементы на странице*/
/* key={el.id} это корректное обращение к каждому юзеру, по индивидуальному параметру, в нашем случае по id */


/* использую this т.к. работаю в классовом компоненте */