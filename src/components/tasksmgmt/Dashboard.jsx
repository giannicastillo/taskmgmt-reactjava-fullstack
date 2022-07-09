import React, {Component} from "react";
import {Link} from 'react-router-dom'


class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h1>Get your life in order!</h1>
                    <h4>{this.props.params.user }, Welcome to your Software Engineering Task Manager! <Link to="/tasks/:id">Click here to access tasks!</Link></h4>
                </div>
            </>
        )
    }
}

export default Dashboard