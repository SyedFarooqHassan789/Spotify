import React, {Component} from 'react';
import {render} from 'react-dom';
var SignUpForm = require('./signupform');
var Logo = require('./../logo');
class SignUpPage extends React.Component {
    render() {
        return (
            <div>
                <Logo></Logo>
                <SignUpForm></SignUpForm>
            </div>
        );

    }
}

render(<SignUpPage/>, document.getElementById('divsignup'));

