var React = require('react');
import classNames from 'classnames';
import validator from 'validator';

class SignUpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: {value: '', isValid: true, message: ''},
            email: {value: '', isValid: true, message: ''},
            password: {value: '', isValid: true, message: ''},
            confirmpassword: {value: '', isValid: true, message: ''},
            gender: {value: '', isValid: true, message: ''},

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
            //form processing here....
            var data = {};
            data.username = this.state.username;
            data.email = this.state.email;
            data.password = this.state.password;
            data.confirmpassword = this.state.password;
            data.gender = this.state.gender;
            $.ajax({
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                url: '/signup',
                success: function (data) {
                    window.location.href = data.redir;
                    console.log(JSON.stringify(data));
                }
            });
        }

    }

    formValid() {
        if (this.state.username.value == "") {
            this.state.username.isValid = false;
            this.state.username.message = 'Username Field is empty';
            this.setState(this.state);
            return false;
        }
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
        if (this.state.confirmpassword.value == "") {
            this.state.confirmpassword.isValid = false;
            this.state.confirmpassword.message = 'Confirm password Field is empty';
            this.setState(this.state);
            return false;
        }
        if (this.state.confirmpassword.value != this.state.password.value) {
            this.state.confirmpassword.isValid = false;
            this.state.confirmpassword.message = 'Password do not match';
            this.setState(this.state);
            return false;
        }
        if (this.state.gender.value == "") {
            this.state.gender.isValid = false;
            this.state.gender.message = 'Gender is not selected';
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
        var usernameGroupClass = classNames("form-group", {"has-error": !this.state.username.isValid});
        var emailGroupClass = classNames("form-group", {"has-error": !this.state.email.isValid});
        var passwordGroupClass = classNames("form-group", {"has-error": !this.state.password.isValid});
        var confirmGroupClass = classNames("form-group", {"has-error": !this.state.confirmpassword.isValid});
        var confirmGenderClass = classNames("radio radiobuttons", "form-group", {"has-error": !this.state.gender.isValid});

        return (
            <form onSubmit={this.handleSubmit}>
                <h2 className="form-signin-heading heading signuppageheading">SignUp</h2>

                <div className={usernameGroupClass}>
                    <input type="text" name="username" className="form-control input"
                           placeholder="Enter Username" value={this.state.username.value} onChange={this.handleChange}
                           autofocus="autofocus"/>
                    <span className="help-block">{this.state.username.message}</span>
                </div>

                <div className={emailGroupClass}>
                    <input type="email" name="email" className="form-control input"
                           placeholder="Enter Email" value={this.state.email.value} onChange={this.handleChange}
                    />
                    <span className="help-block">{this.state.email.message}</span>
                </div>
                <div className={passwordGroupClass}>
                    <input type="password" name="password" className="form-control input"
                           placeholder="Password" value={this.state.password.value} onChange={this.handleChange}/>
                    <span className="help-block">{this.state.password.message}</span>
                </div>
                <div className={confirmGroupClass}>
                    <input type="password" name="confirmpassword" className="form-control input"
                           placeholder="Confirm Password" value={this.state.confirmpassword.value}
                           onChange={this.handleChange}/>
                    <span className="help-block">{this.state.confirmpassword.message}</span>
                </div>
                <div className={confirmGenderClass} onChange={this.handleChange.bind(this)}>
                    <label className="radio-inline"><input type="radio" name="gender" value="Male"/>Male</label>
                    <label className="radio-inline"><input type="radio" name="gender" value="Female"
                    />Female</label>
                    <span className="help-block radio">{this.state.gender.message}</span>

                </div>
                <button className="btn btn-lg btn-success btn-block frontPageButton" type="submit">SignUp</button>
            </form>
        );
    }
}

module.exports = SignUpForm;
