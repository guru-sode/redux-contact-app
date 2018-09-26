import React, { Component } from 'react';

class ContactList extends Component {
    constructor(){
        super();
        this.state ={
            name:[]
        };
    }

    componentDidMount = () =>{
        fetch('')
        .then((response)=>response.json)
        .then((data)=>console.log(data))
    }
    render() {
        return (
            <div>
                <h1>Contact Manager</h1>
                <div className='contact-container'>
                <h3>Contacts</h3>
                    <div>Gurukiran</div>
                    <div>Gurukiran</div>
                </div>
            </div>
        );
    }
}

export default ContactList;