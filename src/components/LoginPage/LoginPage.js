import React from "react";
import './LoginPage.scss'

const LoginPage = () => {
    return (
        <div>
            <div className="loginContainer">
                <div className="marginTop8">Login :</div>
                <div className="marginTop8 width100Per"><input placeholder="Login" className="width100Per inputInput" /></div>
            </div>
            <div className="loginContainer">
                <div className="marginTop8">Password :</div>
                <div className="marginTop8 width100Per"><input placeholder="Password" className="width100Per inputInput" /></div>
            </div>
            <div className="loginButton">Sign In</div>
            <div className="flex justifyBetween textSecondary marginTop8">
                <div>Forgot Password?</div>
                <div>Sign Up</div>
            </div>
        </div>
    )

}

export default LoginPage