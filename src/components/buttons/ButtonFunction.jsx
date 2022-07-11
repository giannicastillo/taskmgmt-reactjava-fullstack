import React, { Component } from 'react';
import './ButtonFunction.css'
import PropTypes from 'prop-types'

class ButtonFunction extends Component {
     // Use constructor in order to define the state of the buttonfunction component
    constructor() {
        super(); //make sure to add super in order to use the constructor 
        this.state = {
            button: 0,
        }
        //this.addOne function had to be defined here in order to execute addOne()
        //a binding method does not have to be used when you use an ARROW FUNCTION
        this.addOne = this.addOne.bind(this);
        this.subOne = this.subOne.bind(this);
        this.restart = this.restart.bind(this);
    }
    
    render() {
        return (
            <div className='button'>
                <OneButtonFunction by={1} addOneMethod={this.addOne} subOneMethod={this.subOne}/>
                <OneButtonFunction by={5} addOneMethod={this.addOne}  subOneMethod={this.subOne}/>
                <OneButtonFunction by={10} addOneMethod={this.addOne}  subOneMethod={this.subOne}/>
                <span className='buttonnums'>{this.state.button}</span>
                <div></div>
                <button className='restart' onClick={this.restart}>Restart</button>
            </div>
        );
    }

    restart(){
        this.setState(
            //prevState function was a copy/paste from the addOne/subOne and was edited for reset. 
            //prevState function is not being used here 
            (prevState) => {
                return {button: 0}
            }
        );
    }



    addOne(by) {
        // console.log(`addOne function from parent = + ${by}`)
        this.setState(
            (prevState) =>{
            return {button: prevState.button + by}
        });
    }

    subOne(by) {
        // console.log(`addOne function from parent = + ${by}`)
        this.setState(
            (prevState) =>{
            return {button: prevState.button - by}
        });
    }
}

//changed to class component 
class OneButtonFunction extends Component {
    // Use constructor in order to define the state of the buttonfunction component
    constructor() {
        super(); //make sure to add super in order to use the constructor 
        // this.state = {
        //     button: 0,
        // }
        // //this.addOne function had to be defined here in order to execute addOne()
        // //a binding method does not have to be used when you use an ARROW FUNCTION
        // this.addOne = this.addOne.bind(this);
        // this.subOne = this.subOne.bind(this);
    }
    //created this render to have it extend to the component 
    render() {
        return (
            <div className='onebuttonfunction'>
                {/* * NOTE that the tags that are being used are lowercase "b" in button */}
                <button onClick={() => this.props.addOneMethod(this.props.by)} >+{this.props.by}</button>
                <button onClick={() => this.props.subOneMethod(this.props.by)} >-{this.props.by}</button>
            </div>
        );
    }

    // //removed function before addOne method INSIDE the class method
    // addOne() { // Make sure the state is updated here in order to increment +1 OR button++
    //     //console.log('add +1'); - checked to see if it can be seen in browser
    //     this.setState({
    //         button: this.state.button + this.props.by
    //     });
    //     //from the props which are positive, increment
    //     this.props.addOneMethod(this.props.by);
    // }

    // subOne() { // Make sure the state is updated here in order to increment +1 OR button++
    //     //console.log('add +1'); - checked to see if it can be seen in browser
    //     this.setState({
    //         button: this.state.button - this.props.by
    //     });
    //     //from the props which are positive, increment
    //     this.props.subOneMethod(this.props.by);
    // }
}


OneButtonFunction.defaultProps = {
    by: 1,

}

//this acts as a validator to make sure that the "by={}" in App.js is a number
OneButtonFunction.propTypes = {
    by: PropTypes.number
}

export default ButtonFunction