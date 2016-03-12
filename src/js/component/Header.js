'use strict';

import React, {Component} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import RaisedButton from 'material-ui/lib/raised-button';

const styles = {
    popover: {
        padding: 20,
    },
}

class Header extends Component{

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    openLogin(event){
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose(){
        this.setState({
            open: false,
        });
    };

    render(){
        return(
            <div>
                <AppBar
                    onTitleTouchTap={this.openLogin.bind(this)}
                    title="Material-React-App"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={
                      <IconMenu
                        iconButtonElement={
                          <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      >
                        <MenuItem primaryText="Login" onClick={this.openLogin.bind(this)}/>
                        <MenuItem primaryText="Sign Up" />
                      </IconMenu>
                    }/>

                    <Popover
                      open={this.state.open}
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                      targetOrigin={{horizontal: 'left', vertical: 'top'}}
                      onRequestClose={this.handleRequestClose.bind(this)}
                      animation={PopoverAnimationFromTop}>
                      <div style={styles.popover}>
                        <RaisedButton primary={true} label="Here is a button"/>
                      </div>
                    </Popover>
            </div>
        );
    }

}


export default Header;
