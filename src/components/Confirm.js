import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
class Confirm extends Component {
    
    
    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Details"/>
                    <List>
                        <ListItem primaryText="First Name" secondaryText={values.firstName} />
                        <ListItem primaryText="Last Name" secondaryText={values.lastName} />
                        <ListItem primaryText="Email" secondaryText={values.email} />
                        <ListItem primaryText="Occupation" secondaryText={values.occupation} />
                        <ListItem primaryText="City" secondaryText={values.city} />
                        <ListItem primaryText="Bio" secondaryText={values.bio} />
                    </List>
                    <RaisedButton primary={true} label="Back" onClick={this.props.prevStep} />
                    <RaisedButton primary={true} label="Confirm & Continue" onClick={this.props.nextStep} />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Confirm;