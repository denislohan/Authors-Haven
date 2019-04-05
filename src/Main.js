import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/js/home";
import Stuff from "./components/js/stuff";
import Contact from "./components/js/contact";
import Chat from "./components/js/chat";
import Signup from "./components/js/signup";
import Login from "./components/js/login";



import $ from 'jquery';
import "./index.css";
global.jQuery = $;

window.$=$
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Simple react redux app</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to ="/stuff">Stuff</NavLink></li>
                    <li><NavLink to ="/contact">Contact</NavLink></li>
                    <li><NavLink to ="/chat">Public Chat</NavLink></li>
                    <li><NavLink to ="/signin">Login</NavLink></li>

                    <li><NavLink to ="/signup">Create User</NavLink></li>


                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/chat" component={Chat}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/signin" component={Login}/>



                </div>
            </div>
        </HashRouter>

    );
  }

}
 
export default Main;