import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <header>
                    {this.props.title}
                </header>
            </div>
        );
    }
    
}

export default Header;