import React, { Component } from 'react';
import Appbar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { FormControl, InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import {Alert} from '@material-ui/lab';
class FormPersonalDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            pages:this.props.dynamic_page,
            current_page:{
                occupation:'',
                city:'',
                bio:'',
                page_layout:'',
                page_no:this.props.dynamic_page.length
            },
            remove_alert:false
        }
    }
    

    continueBtn = (e) =>{
        e.preventDefault()
        this.props.nextStep()
    }

    goBackBtn = (e) =>{
        e.preventDefault()
        this.props.prevStep()
    }
    addBtn = (e)=>{
        e.preventDefault();
        this.setState({
            pages:[...this.state.pages,this.state.current_page],
            current_page:{
                occupation:'',
                city:'',
                bio:'',
                page_layout:'',
                page_no:this.state.pages.length+1
            }
        })
    }

    warnBtn = ()=>{
        console.log("remove Clicked");
        this.setState({
            remove_alert:true
        })
    }

    removeBtn=()=>{
        const remove_page_no = this.state.current_page.page_no;
        const hold_pages = this.state.pages;
        hold_pages.splice(remove_page_no,1);
        const new_pages = hold_pages.map((page,index)=>{
            return {...page,page_no:index}
        })
        this.setState({
            pages:new_pages,
            current_page:{
                occupation:'',
                city:'',
                bio:'',
                page_layout:'',
                page_no:new_pages.length
            },
            remove_alert:false
        })
    }

    inputChanged = input=>e=>{
        const new_pages  = this.state.pages.map(page=>{
            if(page.page_no===this.state.current_page.page_no){
                return {...this.state.current_page,[input]:e.target.value}
            }else{
                return page
            }
        })
        this.setState({
            pages:new_pages,
            current_page:{...this.state.current_page,[input]:e.target.value}
        })
    }
    dynamicNextBtn = ()=>{
        console.log("Dynamic Next Clicked");
        const hold_current_page = this.state.current_page;
        const next_page_no = hold_current_page.page_no + 1;
        var next_page = { 
            occupation:'',
            city:'',
            bio:'',
            page_layout:'',
            page_no:next_page_no}
        if (next_page_no!==this.state.pages.length){
            [next_page] = this.state.pages.filter(page=>page.page_no===next_page_no)
        }
        this.setState({
            current_page:next_page
        })

    }
    dynamicPrevBtn = ()=>{
        console.log("Dynamic Prev btn Clicked");
        const hold_current_page = this.state.current_page;
        const prev_page_no = hold_current_page.page_no - 1;
        const [prev_page] = this.state.pages.filter(page=>page.page_no===prev_page_no)
        this.setState({
            current_page:prev_page
        })
    }
    pagelayoutChanged = e=>{
        console.log(e.target.value)
        this.setState({
            current_page:{
                [e.target.name]:e.target.value,
                occupation:'',
                city:'',
                bio:'',
                page_no:this.state.current_page.page_no
            }

        })
    }

    render() {
        const {occupation,city,bio} = this.state.current_page;
        const styles = {button:{margin:15},alert_button:{}}
        const {switch_on , switchHandler} = this.props;
        const alert_msg = (this.state.remove_alert? <Alert variant="outlined" severity="warning">
        Are you sure ?<RaisedButton label="Yes, Delete"
                                    secondary={true}
                                    style={styles.alert_button}
                                    onClick={this.removeBtn} />
                      <RaisedButton label="Cancel"
                                    primary={true}
                                    style={styles.alert_button}
                                    onClick={()=>this.setState({remove_alert:false})} />
        </Alert>:"")
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Appbar title="Personal Details"/>
                        <Grid item xs={6}>
                            <FormControlLabel
                                                control={<Switch checked={switch_on} onChange={switchHandler()} name="switch_on" />}
                                                label={switch_on?`Dynamic Pages ${this.state.current_page.page_no}/${this.state.pages.length}`:`${this.state.pages.length} Dynamic Pages Added`}
                                            />
                           
                            <br/>
                                    {alert_msg}<br/>
                           {!switch_on?
                                    <React.Fragment>
                                
                                    <TextField 
                                            hintText="Enter Occupation"
                                            floatingLabelText="Occupation"
                                            value={occupation}
                                            onChange={this.inputChanged('occupation')}
                                    />
                                    <br/>
                                    <TextField 
                                            hintText="Enter City"
                                            floatingLabelText="City"
                                            value={city}
                                            onChange={this.inputChanged('city')}
                                    />
                                    <br/>
                                    <TextField 
                                            id="outlined-multiline-static"
                                            label="Bio"
                                            multiline
                                            rows={4}
                                            floatingLabelText="Bio"
                                            value={bio}
                                            variant="outlined"
                                            onChange={this.inputChanged('bio')}
                                    />
                                    <br/>
                                    <RaisedButton
                                        label="Back"
                                        primary={true}
                                        style={styles.button}
                                        onClick={this.goBackBtn} />
                                    <RaisedButton
                                        label="Continue"
                                        primary={true}
                                        style={styles.button}
                                        onClick={this.continueBtn} />
                                    </React.Fragment>
                                :
                                    <React.Fragment>
                                        <FormControl variant="outlined" className="pagelayout-dropdown" >
                                            <InputLabel >Page Layout</InputLabel>
                                            <Select native
                                                    value={this.state.current_page.page_layout}
                                                    label="Page Layout"
                                                    onChange={this.pagelayoutChanged}
                                                    name="page_layout"
                                                    >
                                                <option aria-label="None" value="" />
                                                <option value="Intro">Inroduction</option>
                                                <option value="Search Spotlight">Search Spotlight</option>
                                            </Select>
                                        </FormControl> 
                                        <br/>                                    
                                        <TextField 
                                                hintText="Enter Occupation"
                                                floatingLabelText="Occupation"
                                                value={occupation}
                                                onChange={this.inputChanged('occupation')}
                                        />
                                        <br/>
                                        <TextField 
                                                hintText="Enter City"
                                                floatingLabelText="City"
                                                value={city}
                                                onChange={this.inputChanged('city')}
                                        />
                                        <br/>
                                        <TextField 
                                                id="outlined-multiline-static"
                                                label="Bio"
                                                multiline={true?"1":"0"}
                                                rows={4}
                                                floatingLabelText="Bio"
                                                value={bio}
                                                variant="outlined"
                                                onChange={this.inputChanged('bio')}
                                        />
                                        <br/>
                                        
                                                <RaisedButton
                                                        label="Add"
                                                        primary={true}
                                                        style={styles.button}
                                                        onClick={this.addBtn} />
                                                <RaisedButton
                                                        label="Remove"
                                                        secondary={true}
                                                        style={styles.button}
                                                        disabled={this.state.pages.length===this.state.current_page.page_no?true:false}
                                                        onClick={this.warnBtn} />
                                                <RaisedButton
                                                        label="Next"
                                                        primary={true}
                                                        style={styles.button}
                                                        disabled={this.state.pages.length===this.state.current_page.page_no?true:false}
                                                        onClick={this.dynamicNextBtn} />
                                                <RaisedButton
                                                        label="Previous"
                                                        primary={true}
                                                        style={styles.button}
                                                        disabled={this.state.current_page.page_no===0?true:false}
                                                        onClick={this.dynamicPrevBtn} />
                                        </React.Fragment>
                                    
                           }
                           
                        </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormPersonalDetails;


