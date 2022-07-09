import React, { Component } from "react"
import { Navigate } from "react-router-dom"
import ServiceAuthentication from "./ServiceAuthentication"

class RouteAuthentication extends Component{
    render() {
        if(ServiceAuthentication.isSignInActive()){
            return {...this.props.children}
        }else{
            return <Navigate to="/login" />
        }
    }
}



export default RouteAuthentication