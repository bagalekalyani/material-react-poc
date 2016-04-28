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
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import SelectField from 'material-ui/lib/select-field';
import Badge from 'material-ui/lib/badge';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Paper from 'material-ui/lib/paper';
import DashboardContent from './DashboardContent.js';

class Dashboard extends Component {

    constructor(props) {
    super(props);
        this.state = {
            open: false,
            showPopOver:false
        };
    }

    test(){
        this.setState({open: !this.state.open})
    }

    showPop(){
        this.setState({showPopOver: !this.state.showPopOver,anchorEl: event.currentTarget})
    }

    handleRequestClose(){
    this.setState({
      showPopOver: false,
    })
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

                <DashboardContent/>
                
                <LeftNav
                  docked={false}
                  width={200}
                  open={this.state.open}
                  onRequestChange={open => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.test.bind(this)} rightIcon={<ActionInfo />}>Material</MenuItem>
                    <MenuItem onTouchTap={this.showPop.bind(this)} leftIcon={<ActionGrade />}>Menu Item 1</MenuItem>
                    <MenuItem onTouchTap={this.test.bind(this)} leftIcon={<ContentInbox />}>Menu Item 2</MenuItem>

                </LeftNav>
            </div>
        );

    }

}

export default Dashboard;
