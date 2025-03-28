import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    
    
    render() {
        if(this.props.users.length > 0)
            return (
                <div>
                    {this.props.users.map((el) => (<User key={el.id} user={el} />))}
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

/* при использовании стейтев, в данном случае через конструктор, обращаемся не просто через this, а через this.state */ 