import React, {Component} from 'react';
import {render} from 'react-dom';
var Logo = require('./../logo');
var LoginForm = require('./login');
var SignUp = require('./signuplink');

class Frontpage extends Component {
    render () {
        return (
            <div>
                <Logo></Logo>
                <SignUp></SignUp >
                <LoginForm></LoginForm >
            </div>
        );
    }
}

render(<Frontpage/>, document.getElementById('divfrontpage'));
