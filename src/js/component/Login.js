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
import * as authActionCreators from '../actions/auth';
import * as appActionCreators from '../actions/app';

class Login extends Component{

    constructor(props) {

        super(props);
        this.state = {
            username: null,
            password: null,
            usernameError: null,
            passwordError: null
        };

    }

    login(e) {

        if (this.state.username && this.state.password){
            let loginData = {
                user: {
                    email: this.state.username,
                    password_hash: this.state.password
                }
            }
            this.props.authActions.authenticateUser(loginData);
        }

        if(!this.state.username){
            this.setState({usernameError: 'Username is mandatory'});
        }

        if(!this.state.password){
            this.setState({passwordError: 'Password is mandatory'});
        }


    }

    onUsernameChange(e) {

        this.setState({username: e.target.value});
        this.setState({usernameError: null});

    }

    onPasswordChange(e) {

        this.setState({password: e.target.value});
        this.setState({passwordError: null});

    }

    openSignUp(){

        this.props.appActions.showHideLoginBox(false);

    }

    componentDidMount() {

        this.props.authActions.clearErrorMessage();

    }

    render(){

        let errorMessageClass = this.props.statusText ? ' show ' : ' hide';

        return(
            <Card className="text-center" >
                <CardHeader
                    title="LOGIN"
                    subtitle="Material-React-Rails-App"/>
                <CardText expandable={false}>
                    <div className={"red-text" + errorMessageClass}>
                        {this.props.statusText}
                    </div>
                    <TextField  hintText="Enter Username"
                                floatingLabelText="Username"
                                errorText={this.state.usernameError}
                                onChange={this.onUsernameChange.bind(this)} /><br />
                    <TextField  hintText="Enter Password"
                                floatingLabelText="Password"
                                type="password"
                                errorText={this.state.passwordError}
                                onChange={this.onPasswordChange.bind(this)} />
                    <div>
                        <RaisedButton   label="Login"
                                        secondary={true}
                                        className="login-btn"
                                        onClick={this.login.bind(this)}/>
                        <RaisedButton   label="Signup"
                                        primary={true}
                                        className="login-btn left-buffer"
                                        onClick={this.openSignUp.bind(this)}/>
                    </div>
                </CardText>
            </Card>
        );
    }

}

const mapStateToProps = (state) => ({
    loginBox: state.app.loginBox,
    statusText: state.auth.statusText
});

const mapDispatchToProps = (dispatch) => ({
   authActions: bindActionCreators(authActionCreators, dispatch),
   appActions: bindActionCreators(appActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);





