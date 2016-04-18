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
            firstName: '',
            lastName: ''
        };

    }

    authenticate(e) {

        if (this.state.firstName == "" || this.state.lastName == "") return;
        e.preventDefault();
        this.props.authActions.authenticateUser(this.state.username, this.state.password);

    }

    onFirstNameChange(e) {

        this.setState({firstName: e.target.value});

    }

    onLastNameChange(e) {

        this.setState({lastName: e.target.value});

    }

    onSignUp(){

        let signupData = {
            user:{
                first_name: this.state.firstName,
                last_name: this.state.lastName
            }
        }
        this.props.signupActions.signUpUser(signupData);
        //this.props.appActions.showHideLoginBox(true);

    }


    render(){

        return(
            <Card className="text-center" >
                <CardHeader
                  title="SIGNUP"
                  actAsExpander={false}
                  showExpandableButton={false}/>
                <CardText expandable={false}>
                    <TextField  hintText="Enter First Name"
                                floatingLabelText="First Name"
                                onChange={this.onFirstNameChange.bind(this)} /><br />
                    <TextField  hintText="Enter Last Name"
                                floatingLabelText="Last Name"
                                onChange={this.onLastNameChange.bind(this)} />
                    <div>
                        <RaisedButton   label="Signup"
                                        primary={true}
                                        className="login-btn"
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





