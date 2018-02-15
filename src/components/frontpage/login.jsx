var React = require('react');
import classNames from 'classnames';
import validator from 'validator';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: {value: '', isValid: true, message: ''},
            password: {value: '', isValid: true, message: ''}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.state[event.target.name].value = event.target.value;
        this.setState(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.resetValidationStates();
        if (this.formValid()) {
            var data = {}
            data.email = this.state.email;
            data.password = this.state.password;
            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url: '/spotify',
                success: function (data) {
                    window.location.href = data.redir;
                    console.log(JSON.stringify(data));
                }
            });
        }

    }

    formValid() {
        if (!validator.isEmail(this.state.email.value)) {
            this.state.email.isValid = false;
            this.state.email.message = 'Not a valid email address';
            this.setState(this.state);
            return false;
        }
        if (this.state.password.value == "") {
            this.state.password.isValid = false;
            this.state.password.message = 'Password Field is empty';
            this.setState(this.state);
            return false;
        }
        return true;
    }

    resetValidationStates() {
        Object.keys(this.state).map(key => {
            if (this.state[key].hasOwnProperty('isValid')) {
                this.state[key].isValid = true;
                this.state[key].message = '';
            }
        });
        this.setState(this.state);
    }

    render() {
        var emailGroupClass = classNames('form-group', {'has-error': !this.state.email.isValid});
        var passwordGroupClass = classNames('form-group', {'has-error': !this.state.password.isValid});
        return (
            <form onSubmit={this.handleSubmit}>
                <h2 className="form-signin-heading heading">Have Account</h2>

                <div className={emailGroupClass}>
                    <input type="email" name="email" className="form-control input"
                           placeholder="Email address" value={this.state.email.value} onChange={this.handleChange}
                           autoFocus/>
                    <span className="help-block">{this.state.email.message}</span>
                </div>
                <div className={passwordGroupClass}>
                    <input type="password" name="password" className="form-control input"
                           placeholder="Password" value={this.state.password.value} onChange={this.handleChange}/>
                    <span className="help-block">{this.state.password.message}</span>
                </div>
                <button className="btn btn-lg btn-primary btn-block frontPageButton" type="submit">SignIn</button>
            </form>
        );
    }
}
module.exports = LoginForm;
