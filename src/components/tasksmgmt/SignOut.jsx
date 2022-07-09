import React, {Component} from "react";

class SignOut extends Component {
    render() {
        return (
            <>
                <h1>You are successfully logged off!</h1>
                <div className="card">
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
export default SignOut