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
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';

class Dashboard extends Component {

    constructor(props) {
    super(props);
        this.state = {open: false};
    }

    test(){
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>

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

                <LeftNav
                  docked={false}
                  width={200}
                  open={this.state.open}
                  onRequestChange={open => this.setState({open})}
                >
                  <MenuItem onTouchTap={this.test.bind(this)} rightIcon={<ActionInfo />}>SynerZip</MenuItem>
                  <MenuItem onTouchTap={this.test.bind(this)} leftIcon={<ActionGrade />}>Menu Item</MenuItem>
                  <MenuItem onTouchTap={this.test.bind(this)} leftIcon={<ContentInbox />}>Menu Item 2</MenuItem>
                </LeftNav>

            </div>
        );

    }

}

export default Dashboard;
