'use strict';

import React, {Component} from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import DashboardContent from './DashboardContent.js';
import Header from './common/Header';

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

                <Header/>

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
