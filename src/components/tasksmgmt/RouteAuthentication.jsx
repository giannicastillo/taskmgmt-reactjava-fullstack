import React, { Component } from "react"
import { Route, Redirect, Navigate } from "react-router-dom"
import ServiceAuthentication from "./ServiceAuthentication.js"

class RouteAuthentication extends Component{
    render() {
        if(ServiceAuthentication.isSignInActive()){
            return <Route {...this.props}/>
        }else{
            return <Navigate to="/login" />
        }
    }
}

export default RouteAuthentication