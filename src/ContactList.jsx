import React, { Component } from 'react';
import data from './data/contactList.json';


class ContactList extends Component {
    constructor(){
        super();
        this.state ={
            name:[]
        };
    }

    componentDidMount = () =>{
        const personName=[];
            data.map((person)=>personName.push(person.name));
            this.setState({
                name:personName
            })
    }

    renderList(){
        const names=[];
        for(let i=0;i<this.state.name.length;i++){
             names.push((<li className='list-group-item' key={this.state.name[i]}>{this.state.name[i]}</li>));
        }
        return names;
    }
    render() {
        console.log(this.state.name);
        return (
            <div>
                <h1>Contact Manager</h1>
                <div className='contact-container'>
                <h3>Contacts</h3>
                <ul className='list-group'>{this.renderList()}</ul>
                </div>
            </div>
        );
    }
}

export default ContactList;