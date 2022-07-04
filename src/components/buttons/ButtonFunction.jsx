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
    }
    
    render() {
        return (
            <div className='button'>
                <OneButtonFunction by={1} addOneMethod={this.addOne}/>
                <OneButtonFunction by={5} addOneMethod={this.addOne}/>
                <OneButtonFunction by={10} addOneMethod={this.addOne}/>
                <span className='count'>{this.state.button}</span>
            </div>
        );
    }
    addOne(by) {
        //console.log(`addOne function from parent = + ${by}`)
        this.setState(
            (prevState) => {
        return { botton: this.state.button + by}
        });
    }
}

//changed to class component 
class OneButtonFunction extends Component {
    // Use constructor in order to define the state of the buttonfunction component
    constructor() {
        super(); //make sure to add super in order to use the constructor 
        this.state = {
            button: 0,
        }
        //this.addOne function had to be defined here in order to execute addOne()
        //a binding method does not have to be used when you use an ARROW FUNCTION
        this.addOne = this.addOne.bind(this);
    }
    //created this render to have it extend to the component 
    render() {
        return (
            <div className='onebuttonfunction'>
                {/* * NOTE that the tags that are being used are lowercase "b" in button */}
                <button onClick={this.addOne} >+{this.props.by}</button>
                <span className='count'
                >{this.state.button}</span>
            </div>
        );
    }

    //removed function before addOne method INSIDE the class method
    addOne() { // Make sure the state is updated here in order to increment +1 OR button++
        //console.log('add +1'); - checked to see if it can be seen in browser
        this.setState({
            button: this.state.button + this.props.by
        });
        //from the props which are positive, increment
        this.props.addOneMethod(this.props.by);
    }
}

OneButtonFunction.defaultProps = {
    by: 1,

}

//this acts as a validator to make sure that the "by={}" in App.js is a number
OneButtonFunction.propTypes = {
    by: PropTypes.number
}

export default ButtonFunction;