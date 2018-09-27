import React, { Component } from 'react';
import data from './data/contactList.json';

class ContactDetails extends Component {
    constructor() {
        super();
    this.state = { 
        home:'',
        mobile:'',
        birthday:''
     }
    }

    componentDidMount=()=>{
        // const index=this.getIndex();
        // console.log(data[index]);
    }

    getIndex(){
        let index;
        data.map((person,i)=>{
            if(this.props.match.params.name===person.name){
            index=i;
            }
        })
        console.log(data[index]);

    }
   
     render() {
        return (<h1>{this.getIndex()}{this.props.match.params.name}</h1>  );
    }
}
 
export default ContactDetails;