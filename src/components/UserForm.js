import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step:1,
            firstName:'',
            lastName:'',
            email:'',
            dynamic_page : [],
            switch_on:  true          
        }
    }
    nextStep = ()=>{
        this.setState({
            step : this.state.step + 1
        })
    }

    prevStep = ()=>{
        this.setState({
           step :  this.state.step -1
        })
    }

    switchHandler = input=>(e)=>{
        this.setState({
            [e.target.name] : e.target.checked
        })
        console.log(e.target.checked)
    }

    handleChange = input=>e=>{
        this.setState({
            [input] : e.target.value
        })
        console.log(this.state);
    }
    render() {
        const {step} = this.state;
        const { firstName,lastName,email } = this.state;
        const values = { firstName,lastName,email};
        switch(step){
            case 1:
                return(
                        <FormUserDetails 
                                    values={values}
                                    handleChange={this.handleChange}
                                    nextStep = {this.nextStep}
                        />                   
                )
            case 2:
                return(
                    <FormPersonalDetails 
                                values={values}
                                handleChange={this.handleChange}
                                nextStep = {this.nextStep}
                                prevStep = {this.prevStep}
                                dynamic_page = {this.state.dynamic_page}
                                switchHandler={this.switchHandler}
                                switch_on = {this.state.switch_on}
                                
                    />
                )
            case 3:
                return(
                    <Confirm 
                        values= {values}
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        dynamic_page = {this.state.dynamic_page}
                    />
                )
            default:
                return(
                    <h2>Something went Wrong</h2>
                )
        }
    }
}

export default UserForm;