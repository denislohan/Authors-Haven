
import $ from 'jquery';
import React from 'react'
import {Input} from 'react-input-component'

require('../css/login.scss')

class Login extends React.Component{
    constructor(){

        super()
        this.state = {
            password:'',
            username:''
        }
    }

    render(){
        return(
        <div className = 'container'>
            <div className='login'>
                Username:

                    <Input 
                    Placeholder='username'type = 'text' name = 'username'
                    
                    />
                    <br/>
                Password :

                    <Input 
                    Placeholder='Password' type='password' name = 'password'

                    />
                    <p className = 'remember_me'>
                            <Input type='checkbox' name = 'remember_me'

                            />
                        Remember me
                    </p>

                    <p className='submit'>
                        <Input type = 'submit'

                        />
                    </p>

            </div>
        </div>)
    }

}

export default Login