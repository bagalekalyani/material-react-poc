'use strict';

import React, {Component} from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import Toggle from 'material-ui/lib/toggle';


class DashboardContent extends Component {

    constructor(props) {
    super(props);
        this.state = {
            open : false,
        };
    }

    onViewClick(){
        this.setState({open: !this.state.open})
    }

    render() {
        return (
           <div>

                <Card className = "thumb">

                    <CardHeader
                        className = "header-blue"
                         title="Wheather Report"
                        subtitle="Kothrud"
                        avatar="http://lorempixel.com/100/100/nature/"/>

                    <CardText>
                        Paschimanagri, Kothrud, Pune, Maharashtra
                        Tuesday 4:00 PM
                        Sunny
                    </CardText>

                    <CardActions>
                        <DatePicker hintText="Start date" />
                        <DatePicker hintText="End Date" />
                        <FlatButton label="Submit" />
                        <FlatButton label="Cancel" />
                    </CardActions>

                </Card>

                <Card className = "thumb">

                    <CardHeader
                        className = "header-blue"
                        title="Attendace Report"
                        subtitle="No title"
                        avatar="http://lorempixel.com/100/100/nature/"/>

                    <CardText>
                        your Attendace is low


                        ....!!
                    </CardText>

                    <CardActions>
                      <DatePicker hintText="Start date" />
                      <DatePicker hintText="End Date" />
                      <FlatButton label="Submit" onClick={this.onViewClick.bind(this)}/>
                      <FlatButton label="Cancel" />
                    </CardActions>

                </Card>

                <Card className = "thumb">

                    <CardActions>

                       <SelectField value={1} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Never"/>
                        <MenuItem value={2} primaryText="Every Night"/>
                        <MenuItem value={3} primaryText="Weeknights"/>
                        <MenuItem value={4} primaryText="Weekends"/>
                        <MenuItem value={5} primaryText="Weekly"/>
                      </SelectField>

                       <Toggle
                        label="Simple"
                        className= "bottom-buffer top-buffer"/>

                      <Toggle
                        label="Simple"
                        className= "bottom-buffer"/>

                      <FlatButton label="Submit" onClick={this.onViewClick.bind(this)}/>
                      <FlatButton label="Cancel" />

                    </CardActions>

                    <CardHeader
                        className = "header-light-green"
                        title="Attendace Report"
                        subtitle="No title"
                        avatar="http://lorempixel.com/100/100/nature/"/>

                </Card>

           </div>
        );

    }

}

export default DashboardContent;
