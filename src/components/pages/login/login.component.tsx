import React, { useState } from "react";
import { connect } from "react-redux";

import { login, } from "../../../redux/modules/user/user";

const mapDispatchToProps = { login, };

type LoginProps = typeof mapDispatchToProps;

const Login: React.FC<LoginProps> = ({ login, }) => {

    // declare local state
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // submit method
    const onSubmit = (event: React.FormEvent) => {
        // prevent default submit
        event.preventDefault();
        // login user
        console.log("logging you in...");
        login({
            id: 1,
            email,
            password,
            type: "teacher",
            name: "Peter",
            username: "petergich",
            isDeactivated: false,
            isAuthenticated: true,
        })
    }

    return (
        <div className="container">
            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">
        
                <div className="col-xl-10 col-lg-12 col-md-9">
            
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user" onSubmit={onSubmit}>
                                            <div className="form-group">
                                                <input 
                                                    type="email"
                                                    value={email}
                                                    aria-describedby="emailHelp" 
                                                    placeholder="Enter Email Address..." 
                                                    onChange={e => setEmail(e.target.value)} 
                                                    className="form-control form-control-user" 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    type="password" 
                                                    value={password}
                                                    placeholder="Password" 
                                                    onChange={e => setPassword(e.target.value)}
                                                    className="form-control form-control-user" 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-user btn-block" type="submit">Login</button>
                                            <hr />
                                        </form>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="register.html">Create an Account!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Login);