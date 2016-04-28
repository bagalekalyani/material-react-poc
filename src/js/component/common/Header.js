'use strict';

import React, {Component} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    test(){
        this.setState({open: !this.state.open})
    }

    render(){

        return(

                <AppBar
                    title="Welcome to Material World"
                    onLeftIconButtonTouchTap={this.test.bind(this)}
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                                <IconButton><MoreVertIcon /></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                            <MenuItem primaryText="Profile" />
                            <MenuItem primaryText="Settings" />
                            <MenuItem primaryText="Log out" />
                        </IconMenu>
                        }>

                </AppBar>

        );

    }

}


export default Header;
