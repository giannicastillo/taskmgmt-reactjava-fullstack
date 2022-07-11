import React, {Component} from "react";
import {Link} from 'react-router-dom'
import TestService from "../../api/tasks/TestService";



class Dashboard extends Component {
    constructor(props){
        super(props)
        // console.log(props.params.user, "this is props ")
        this.retrieveDashboardMessage = this.retrieveDashboardMessage.bind(this)
        this.state = {
            dashMessage: ''
        }
        this.dashMessageHandler = this.dashMessageHandler.bind(this)
        this.dashMessageError = this.dashMessageError.bind(this)

    }
    render() {
        return (
            <>
                <div className="container">
                    <h1>Get your life in order!</h1>
                    <h4>{this.props.params.user }, Welcome to your Software Engineering Task Manager! <Link to='/tasks'>Click here to access tasks!</Link></h4>
                </div>
                <div className="container" >
                    Customize your dashboard message here! 
                    <button onClick={this.retrieveDashboardMessage} className= "btn btn-info"> Get Dashboard Message </button>
                </div>
                <div className="container" >
                    {this.state.dashMessage}
                </div>
            </>
        )
    }

    retrieveDashboardMessage(){
        TestService.executeTest()
        //if req is successful we need to define  a method 
        .then(res => this.dashMessageHandler(res))
        

        TestService.executeBeanTest()
        //if req is successful we need to define  a method 
        .then(res => this.dashMessageHandler(res))
        

        TestService.executePathVariableTest(this.props.params.user)
        //if req is successful we need to define  a method 
        .then(res => this.dashMessageHandler(res))
        .catch(error => this.dashMessageError(error))
    }

    dashMessageHandler(res){
        console.log(res)
        //message is coming from the java/json side 
        this.setState({dashMessage: res.data.message})
    }

    dashMessageError(error){
        console.log(error.response)
        //message is coming from the java/json side 
        this.setState({dashMessage: error.response.data.message})
    }


}

export default Dashboard