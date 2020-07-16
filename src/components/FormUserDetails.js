import React, { Component } from 'react';
import Appbar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Grid from '@material-ui/core/Grid'
import { Button,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel } from '@material-ui/core';

class FormUserDetails extends Component {
    continueBtn = e =>{
        e.preventDefault()
        this.props.nextStep();
    }

    render() {
        const {values,handleChange} = this.props;
        const styles = {button:{margin:15},
                        radio:{padding:'0px',marginTop:'10px'},
                        radioLabel:{textAlign:'left'}}


        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="User Details Form" />
                   
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
                        <FormControl component="fieldset">
                                <FormLabel component="legend" style={styles.radioLabel}>Logo Image</FormLabel>
                                <RadioGroup row aria-label="position" name="position" defaultValue="Uploaded">
                                    
                                    <FormControlLabel value="Uploaded"
                                                    control={<Radio color="primary" style={styles.radio}/>}
                                                    label="Uploaded"
                                                    labelPlacement="bottom"
                                    />
                                    <FormControlLabel value="Custom"
                                                    control={<Radio color="primary" style={styles.radio} />}
                                                    label="Custom"
                                                    labelPlacement="bottom"
                                    />
                                    
                                </RadioGroup>
                        </FormControl>
                        <br/>
                        <TextField 
                                    hintText="Enter Last Name"
                                    floatingLabelText = "Last Name"
                                    defaultValue={values.lastName} 
                                    onChange={handleChange('lastName')}
                                    />
                        <br/>

                       <RaisedButton
                                containerElement='label'>
                                <input type="file" />
                        </RaisedButton>
                        <Button variant="contained" component="label">Upload</Button>
                        <br/> 
                        <TextField 
                                    hintText="Enter Email"
                                    floatingLabelText = "email"
                                    defaultValue={values.email} 
                                    onChange={handleChange('email')}
                                    />
                    <br/>
                    <TextField         
                                    rows = {4}
                                    hintText="Description"
                                    floatingLabelText = "Description"
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