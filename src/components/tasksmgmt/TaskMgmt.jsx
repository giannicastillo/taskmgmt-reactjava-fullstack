import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";

class TaskMgmt extends Component {
    render() {
        const SigninPageWithNavigation = withNavigation(SigninPage);
        const DashboardWithParams = withParams(Dashboard);
        return (
            <div className="TaskMgmt">
                {/* //if the route aka path is "" then we use component {} */}
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<SigninPageWithNavigation />} />
                        <Route path="/login" element={<SigninPageWithNavigation />} />
                        <Route path="/dashboard/:user" element={<DashboardWithParams />} />
                        <Route path="/tasks" element={<ListOfTasks />} />
                        <Route path="*" element={<ErrorURL />} />
                        <Route path="/logout" element={<SignOut />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
            // <SigninPage></SigninPage>
            // <Dashboard></Dashboard>
        )
    }
}

class Header extends Component {
    render() {
        return (
            //used the bootstap formatting to create navbar for project
            <>
                <div className="header">
                    <nav className="navbar navbar-expand-lg navbar-success bg-sucess">
                        <div className="container-fluid ">
                            <a className="navbar-brand" href="http://www.gianni-test.com"> G-test </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link-active" aria-current="page" to="/dashboard/Gianni">Home</Link>
                                    </li>
                                </ul>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/tasks">Tasks</Link>
                                        </li>
                                    </ul>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <Link className="nav-link active" aria-current="page" to="/login">Sign in</Link>
                                            </li>
                                        </ul>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <Link className="nav-link active" aria-current="page" to="/logout">Sign Out</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <hr />
                </div>
            </>
        )
    }
}
{/* <nav className="navbar navbar-expand-md">
                    <div><a>g-test</a></div>
                    <ul className="navbar-nav">
                        <li className="nav-link">Home</li>
                        <li className="nav-link">Task</li>
                    </ul>
                    <ul className="navbar-nav">
                        <li>Sign In</li>
                        <li>Sign Out</li>
                    </ul>
                </nav> */}

class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className="footer">
                        <h4> Gianni Castillo</h4>
                        <h5>Fullstack Software Developer</h5>
                        <h6>gianni.castillo96@gmail.com</h6>
                        <div>
                            <a href="https://www.linkedin.com/in/giannicastillo">     Linkedin     </a> ||
                            <a href="https://github.com/giannicastillo">     GitHub      </a> ||
                            <a href="">     Résumé  (need to add)    </a>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

class SignOut extends Component {
    render() {
        return (
            <>
                <h1>You are successfully logged off!</h1>
                <div class="card">
                    <div className="thank-you" class="card-header">
                        Thank you for visiting!
                    </div>
                    <div class="card-body" className="quote">
                        <blockquote class="blockquote mb-0">
                            <p>“I’m not a great programmer; I’m just a good programmer with great habits.”</p>
                            <footer class="blockquote-footer">Kent Beck </footer>
                        </blockquote>
                    </div>
                </div>
            </>
        )
    }
}

class Dashboard extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Get your life in order!</h1>
                    <h4>{this.props.params.user}, Welcome to your Software Engineering Task Manager! <Link to="/tasks">Click here to access tasks!</Link></h4>
                </div>
            </>
        )
    }
}

//Using this class function to create a task list 
class ListOfTasks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task:
                [
                    { id: 1, ActionItem: 'Write Goals', Completed: true, Deadline: new Date() },
                    { id: 2, ActionItem: 'Work Out', Completed: true, Deadline: new Date() },
                    { id: 3, ActionItem: 'Practice Algorithms', Completed: true, Deadline: new Date() },
                    { id: 4, ActionItem: 'Complete Gitub certification', Completed: false, Deadline: new Date() },
                ]
        }
    }


    render() {
        return (
            <div>
                <h2> Here is how you can stand out and land a job as a software engineer:</h2>
                <div class="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Action Item</th>
                                <th>Action successfully completed?</th>
                                <th>Deadline</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.task.map(
                                    task =>
                                        <tr>
                                            <td>{task.ActionItem}</td>
                                            <td>{task.Completed.toString()}</td>
                                            <td>{task.Deadline.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

//ERROR HANDLER- shows an error message when unknown link is shown.  
function ErrorURL() {
    return <div> ERROR! YOU HAVE TRIGGERED THE ERROR HANDLER! </div>
}

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
        if (this.state.signin === 'Gianni' && this.state.password === '1234567890') {
            //Navigate is being used to route from singinpage to dashboard 
            this.props.navigate(`/dashboard/${this.state.signin}`)
            //if credentials are valid, show success message 
            this.setState({ displayValidSignIn: true })
            this.setState({ invalidSignin: false })
        }

        else {
            //if credentials invalid, show invalid message 
            this.setState({ displayValidSignIn: false })
            this.setState({ invalidSignin: true })
        }

        //console.log(this.state)
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
    // }



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





export default TaskMgmt