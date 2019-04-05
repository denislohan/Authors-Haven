import React, { Component } from "react";
import {Input} from 'react-input-component'
import $ from 'jquery';

 
class Contact extends Component {
    componentDidMount(){
        document.getElementById('input').innerText ='Give us your first name'
        $('button').on('click',()=>{
        console.log('clicked')
        })
    }
    
  render() {
    return (
      <div>
        <h2>Give us your details</h2>
        <p id='input' ></p>  
        <Input placeholder="first name" />
        <button type='Submit'>Submit</button>
      </div>
    );
   
  }
}
 
export default Contact;