'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreators from "../actions/auth";
import Header from './Header';
import Login from './Login';
import Signup from './Signup';

class Home extends Component {

    render() {

        let { loginBox } = this.props;
        let loginSignupBox = null;

        if (loginBox) {
            loginSignupBox = <Login />;
        }
        else{
            loginSignupBox = <Signup />;
        }

        return (
            <div>

                <Header />

                {this.props.children}

                {loginSignupBox}

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loginBox: state.app.loginBox
});

const mapDispatchToProps = (dispatch) => ({
   authActions: bindActionCreators(authActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
