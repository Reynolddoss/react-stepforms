import React, { Component } from 'react';
import Appbar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Grid from '@material-ui/core/Grid'

class FormUserDetails extends Component {
    continueBtn = e =>{
        e.preventDefault()
        this.props.nextStep();
    }

    render() {
        const {values,handleChange} = this.props;
        const styles = {button:{margin:15}}


        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="User Details" />
                   
                    <br/>
                    <Grid item xs={6}>
                        <TextField 
                                    hintText="Enter First Name"
                                    floatingLabelText = "First Name"
                                    defaultValue={values.firstName} 
                                    onChange={handleChange('firstName')}
                                    />
                        <br/>
                        <TextField 
                                    hintText="Enter Last Name"
                                    floatingLabelText = "Last Name"
                                    defaultValue={values.lastName} 
                                    onChange={handleChange('lastName')}
                                    />
                        <br/>
                        <TextField 
                                    hintText="Enter Email"
                                    floatingLabelText = "email"
                                    defaultValue={values.email} 
                                    onChange={handleChange('email')}
                                    />
                    <br/>
                    <RaisedButton
                                    label="Continue"
                                    primary={true}
                                    style={styles.button}
                                    onClick={this.continueBtn} />
                    </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;