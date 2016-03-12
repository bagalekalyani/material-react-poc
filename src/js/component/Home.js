'use strict';

import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import RaisedButton from 'material-ui/lib/raised-button';
import Header from './Header';
import Login from './Login';

const styles = {
  popover: {
    padding: 20,
  },
};

class Home extends Component {

    componentWillMount(){
        injectTapEventPlugin();
    }

    render() {
        return (
            <div>

                <Header />

                {this.props.children}

                <Login />

            </div>
        );
    }
}

export default Home;
