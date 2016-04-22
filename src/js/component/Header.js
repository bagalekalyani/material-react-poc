'use strict';

import React, {Component} from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import RaisedButton from 'material-ui/lib/raised-button';
import LeftNav from 'material-ui/lib/left-nav';


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    test(){
        alert("uhf")
        // this.setState({open: !this.state.open});
    }

    // <IconMenu
    //     iconButtonElement={
    //         <IconButton><MoreVertIcon /></IconButton>
    //     }
    //     targetOrigin={{horizontal: 'right', vertical: 'top'}}
    //     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    //     >
    //     <MenuItem primaryText="Refresh" />
    //     <MenuItem primaryText="Help" />
    //     <MenuItem primaryText="Sign out" />
    // </IconMenu>
    // <LeftNav width={200} open={this.state.open}>
    //   <MenuItem>Menu Item</MenuItem>
    //   <MenuItem>Menu Item 2</MenuItem>
    // </LeftNav>

    render(){

        return(
            
            <div>
                <AppBar
                    title="Material-React-Rails-App"
                    onTitleTouchTap={this.test.bind(this)}>
                </AppBar>
            </div>

        );

    }

}


export default Header;
