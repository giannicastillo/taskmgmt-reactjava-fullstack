import React, { Component } from "react"
import ServiceAuthentication from "./ServiceAuthentication"

class SigninPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signin: 'Gianni',
            password: '',
            //default validations, starting off with both false
            invalidSignin: false,
            succussfulSignin: false,

        }
        //DEFINING STATE VARIABLES BELOW 
        // this.signInHandleChanged = this.signInHandleChanged.bind(this)
        // this.pwordHandleChanged = this.pwordHandleChanged.bind(this)
        this.changingHandle = this.changingHandle.bind(this)
        this.clickingLogIn = this.clickingLogIn.bind(this)
    }

    //this function below is able to execute both signInHandleChanged(e) and pwordHandleChanged(e) events
    changingHandle(e) {
        //used to change the state
        this.setState(
            //pass object containing new value 
            {
                [e.target.name]
                    : e.target.value
            }
            // console.log (this.state);
        )
    }

    clickingLogIn() {
        //only valid signin, password combo is g-test, 1234567890 (for now)
        if (this.state.signin === 'Gianni' && this.state.password === '123') {
        ServiceAuthentication.registerSuccessfulLogin(this.state.signin, this.state.password)
            //Navigate is being used to route from singinpage to dashboard 
            this.props.navigate(`/dashboard/${this.state.signin}`)
            this.setState({displayValidSignIn:true})
            this.setState({invalidSignin:false})
        }

        else {
            //if credentials invalid, show invalid message 
            this.setState({ displayValidSignIn: false })
            this.setState({ invalidSignin: true })
        }


    // ServiceAuthentication.executeServAuth(this.state.signin, this.state.password)
    // .then(() => {
    //         ServiceAuthentication.registerSuccessfulLogin(this.state.signin, this.state.password)
    //         this.props.navigate(`/dashboard/${this.state.signin}`)
    //     }
    // )
    // .catch( () => {
    //     this.setState({ displayValidSignIn: false })
    //     this.setState({ invalidSignin: true })
    // }
    // )
} 

    
    // //uses an event as in input 
    // signInHandleChanged(e) {
    //     console.log (e.target.value);
    //     //used to change the state
    //     this.setState(
    //         //pass object containing new value 
    //         {
    //             [e.target.name]
    //             :e.target.value
    //         }
    //     )
    // }


    // //uses an event as in input 
    // pwordHandleChanged(e) {
    //     console.log (e.target.value);
    //     //used to change the state
    //     this.setState(
    //         //pass object containing new value 
    //         {
    //             password: e.target.value
    //         }
    //     )
    



    render() {
        return (
            
            //<> = react fragment, it has the same function as a div 
            <>
                <div className="container">
                    <h1>Sign in </h1>
                    {/* //show invalid only if invalidSignin has a value of true ! */}
                    {/* <InvalidSigninValidator invalidSignin= {this.state.invalidSignin} /> */}
                    {/* using condition rendering below  */}
                    {this.state.invalidSignin && <div className="alert alert-warning"> Invalid username and/or password </div>}
                    {this.state.displayValidSignIn && <div> You are successfully signed in! </div>}
                    {/* <DisplayValidSignIn displayValidSignIn= {this.state.displayValidSignIn} /> */}
                    Sign in: <input type="text" name="signin" value={this.state.signin} onChange={this.changingHandle} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.changingHandle} />
                    <button className="btn btn-success" onClick={this.clickingLogIn} >Log in</button>
                </div>
                <div className="card m-3">
                    <div className="thank-you" className="card-header">
                        Thank you for visiting!
                    </div>
                    <div className="card-body" className="quote">
                        <blockquote className="blockquote mb-0">
                            <p>“I’m not a great programmer; I’m just a good programmer with great habits.”</p>
                            <footer className="blockquote-footer">Kent Beck </footer>
                        </blockquote>
                    </div>
                </div>
            </>
        )
    }
}

//NO LONGER NEEDED SINCE WE ARE CONDITIONAL RENDERING UNDER RETURN 
// function InvalidSigninValidator(props) { 
//         if(props.invalidSignin){
//             return <div> Invalid username and/or password </div>
//         }
//         return null
//     }

// function DisplayValidSignIn (props) {
//     if(props.displayValidSignIn) {
//         return <div> You are successfully signed in! </div>
//     }
//     return null
// }

export default SigninPage