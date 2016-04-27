'use strict';

import React, {Component} from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signupActionCreators from '../actions/signup';
import * as appActionCreators from '../actions/app';

class Login extends Component{

    constructor(props) {

        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            address: null,
            phoneNumber: null,
            password: null,
            confirmPassword: null,
            firstNameError: null,
            emailError: null,
            passwordError: null,
            confirmPasswordError: null
        };

    }


    onFirstNameChange(e) {

        this.setState({firstName: e.target.value});
        this.setState({firstNameError: null});

    }

    onLastNameChange(e) {

        this.setState({lastName: e.target.value});

    }

    onEmailChange(e){

        this.setState({email: e.target.value});
        this.setState({emailError: null});

    }

    onAddressChange(e){

        this.setState({address: e.target.value});

    }

    onPhoneNumberChange(e){

        this.setState({phoneNumber: e.target.value});

    }

    onPasswordChange(e){

        this.setState({password: e.target.value});
        this.setState({passwordError: null});

    }

    onConfirmPasswordChange(e){

        this.setState({confirmPassword: e.target.value});
        this.setState({confirmPasswordError: null});

    }

    openSignUp(){

        this.props.appActions.showHideLoginBox(true);

    }

    componentDidMount() {

        this.props.signupActions.clearErrorMessage();

    }

    onSignUp(){

        if(!this.state.firstName){
            this.setState({firstNameError: 'First name is mandatory'});
        }

        if(!this.state.email){
            this.setState({emailError: 'Email address is mandatory'});
        }

        if(!this.state.password){
            this.setState({passwordError: 'Password is mandatory'});
        }

        if(!this.state.confirmPassword){
            this.setState({confirmPasswordError: 'Confirm password is mandatory'});
        }

        let signupData = {
            user:{
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                address: this.state.address,
                phone_number: this.state.phoneNumber,
                password_hash: this.state.password
            }
        }

        let passwordsMatch = true;

        if(this.state.password != this.state.confirmPassword){
            passwordsMatch = false;
        }

        if(!passwordsMatch){
            this.setState({confirmPasswordError: 'Password and confirm password should match'});
        }

        if(this.state.firstName && this.state.email && this.state.password && this.state.confirmPassword && passwordsMatch){
            this.props.signupActions.signUpUser(signupData);
        }

    }

    render(){

        let errorMessageClass = this.props.statusText ? ' show ' : ' hide';

        return(
            <Card className="text-center" >
                <CardHeader
                    title="SIGNUP"
                    subtitle="Material-React-Rails-App"/>
                <CardText expandable={false}>
                    <div className={"red-text" + errorMessageClass}>
                        {this.props.statusText}
                    </div>
                    <TextField  hintText="Enter First Name*"
                                floatingLabelText="First Name*"
                                errorText={this.state.firstNameError}
                                onChange={this.onFirstNameChange.bind(this)} /><br />
                    <TextField  hintText="Enter Last Name*"
                                floatingLabelText="Last Name*"
                                onChange={this.onLastNameChange.bind(this)} /><br />
                    <TextField  hintText="Enter Email*"
                                floatingLabelText="Email Address*"
                                errorText={this.state.emailError}
                                onChange={this.onEmailChange.bind(this)} /><br />
                    <TextField  hintText="Enter Phone Number*"
                                floatingLabelText="Phone Number*"
                                onChange={this.onPhoneNumberChange.bind(this)} /><br />
                    <TextField  hintText="Enter Address*"
                                floatingLabelText="Address*"
                                onChange={this.onAddressChange.bind(this)} /><br />
                    <TextField  type="password"
                                hintText="Password*"
                                floatingLabelText="Password*"
                                errorText={this.state.passwordError}
                                onChange={this.onPasswordChange.bind(this)} /><br />
                    <TextField  type="password"
                                hintText="Confirm Password*"
                                floatingLabelText="Confirm Password*"
                                errorText={this.state.confirmPasswordError}
                                onChange={this.onConfirmPasswordChange.bind(this)} /><br />
                    <div>
                        <RaisedButton   label="Back"
                                        className="login-btn"
                                        onClick={this.openSignUp.bind(this)}/>
                        <RaisedButton   label="Signup"
                                        secondary={true}
                                        className="login-btn left-buffer"
                                        onClick={this.onSignUp.bind(this)}/>
                    </div>
                </CardText>
            </Card>
        );
    }

}

const mapStateToProps = (state) => ({
    loginBox: state.auth.loginBox,
    statusText: state.signup.statusText
});

const mapDispatchToProps = (dispatch) => ({
   signupActions: bindActionCreators(signupActionCreators, dispatch),
   appActions: bindActionCreators(appActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);





