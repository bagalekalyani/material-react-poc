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
            firstNameError: null,
            lastNameError: null,
            emailError: null,
            phoneNumberError: null,
            addressError: null
        };

    }


    onFirstNameChange(e) {

        this.setState({firstName: e.target.value});
        this.setState({firstNameError: null});

    }

    onLastNameChange(e) {

        this.setState({lastName: e.target.value});
        this.setState({lastNameError: null});

    }

    onEmailChange(e){

        this.setState({email: e.target.value});
        this.setState({emailError: null});

    }

    onAddressChange(e){

        this.setState({address: e.target.value});
        this.setState({addressError: null});

    }

    onPhoneNumberChange(e){

        this.setState({phoneNumber: e.target.value});
        this.setState({phoneNumberError: null});

    }

    openSignUp(){

        this.props.appActions.showHideLoginBox(true);

    }


    onSignUp(){

        if(!this.state.firstName){
            this.setState({firstNameError: 'First name is mandatory'});
        }

        if(!this.state.lastName){
            this.setState({lastNameError: 'Last name is mandatory'});
        }

        if(!this.state.email){
            this.setState({emailError: 'Email Address is mandatory'});
        }

        if(!this.state.address){
            this.setState({addressError: 'Address is mandatory'});
        }

        if(!this.state.phoneNumber){
            this.setState({phoneNumberError: 'Phone Number is mandatory'});
        }

        let signupData = {
            user:{
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                email: this.state.email,
                address: this.state.address,
                phone_number: this.state.phoneNumber
            }
        }
        if(this.state.firstName && this.state.lastName && this.state.email && this.state.address && this.state.phoneNumber){
            this.props.signupActions.signUpUser(signupData);
        }

    }


    render(){

        return(
            <Card className="text-center" >
                <CardHeader
                  title="SIGNUP"
                  actAsExpander={false}
                  showExpandableButton={false}/>
                <CardText expandable={false}>
                    <TextField  hintText="Enter First Name*"
                                floatingLabelText="First Name*"
                                errorText={this.state.firstNameError}
                                onChange={this.onFirstNameChange.bind(this)} /><br />
                    <TextField  hintText="Enter Last Name*"
                                floatingLabelText="Last Name*"
                                errorText={this.state.lastNameError}
                                onChange={this.onLastNameChange.bind(this)} /><br />
                    <TextField  hintText="Enter Email*"
                                floatingLabelText="Email Address*"
                                errorText={this.state.emailError}
                                onChange={this.onEmailChange.bind(this)} /><br />
                    <TextField  hintText="Enter Phone Number*"
                                floatingLabelText="Phone Number*"
                                errorText={this.state.phoneNumberError}
                                onChange={this.onPhoneNumberChange.bind(this)} /><br />
                    <TextField  hintText="Enter Address*"
                                floatingLabelText="Address*"
                                errorText={this.state.addressError}
                                onChange={this.onAddressChange.bind(this)} /><br />

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
    loginBox: state.auth.loginBox
});

const mapDispatchToProps = (dispatch) => ({
   signupActions: bindActionCreators(signupActionCreators, dispatch),
   appActions: bindActionCreators(appActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);





