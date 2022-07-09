import React, {Component} from "react";
import { Link } from 'react-router-dom'
import ServiceAuthentication from "./ServiceAuthentication";

class Header extends Component {
    render() {
        // let { isSignInActive } = this.props;
        const isSignInActive = ServiceAuthentication.isSignInActive();

        console.log (isSignInActive); //when signing in the console log comes back false . NEED HELP!!
        //trying to use value to enable / disable links 

        return (
            //used the bootstap formatting to create navbar for project
            <>
                <div className="header">
                    <nav className="navbar navbar-expand-lg navbar-success bg-sucess">
                        <div className="container-fluid ">
                            <a className="navbar-brand" href="http://localhost:3000"> Gianni Website </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {/* Note: The items that are in {} allow for only the user to see the info when signed in  */}
                                    {isSignInActive && <li className="nav-item">
                                        <Link className="nav-link-active" aria-current="page" to="/dashboard/Gianni">Home</Link>
                                    </li>}
                                </ul>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {isSignInActive && <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/tasks/:id">Tasks</Link>
                                    </li>}
                                </ul>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {!isSignInActive && <li className="nav-item">
                                        <Link className="nav-link active justify-content-end" aria-current="page" onClick={ServiceAuthentication.registerSuccessfulLogin} to="/login">Sign in</Link>
                                    </li>}
                                </ul>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {/* only if  a user has logged in , it will allow him to log out  */}
                                    {isSignInActive && <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/logout"  onClick={ServiceAuthentication.logout}>Sign Out</Link>
                                    </li>}
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <hr />
                </div>
            </>
        )
    }
}

export default Header