import React,{ Component } from 'react'
import {Input} from 'react-input-component'
import $ from 'jquery';
require('../css/chat.scss')

class Chat extends Component{
    componentDidMount(){
        $('#form1').on('click',()=>{
            console.log('submitted')
        })
    }

    constructor () {
        super()
        this.state = {
          message: ''
        }
      }
      
      changeHandler = async event => {
        await 
            this.setState({
            message: event.target.value
            });
        console.log(this.state.message)
      }
    // submitFormHandler= ()=>{
   
    render(){
        return(
            <div id = 'chat_window'> 
                <form>
                    <Input
                        placeholder='type to chat'name = 'message'
                        value={this.state.message.value} 
                        onChange={this.changeHandler} 
                    />
                </form>
                <button type="submit" id="form1" value="Submit">Submit</button>


            </div>)
    }
}

export default Chat