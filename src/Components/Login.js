import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    state = {
        email: '',
        password: '',
        loggedIn: false
    }

    logIn = () => {
        axios.post(`https://reqres.in/api/login`,
         {
             email: this.state.email,
             password: this.state.password
         },
         this.setState({ loggedIn: true })
     )
     .then(res => {
        // this.props.history.push('/home');
         console.log(res)
     })
    }

    render() {
       if(this.state.loggedIn) {
           return< Redirect to="/home" />
       }
        return (
            <>
                <div className="background">
                    <div className="container">
                    <div className="screen">
                        {/* <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button close" />
                            <div className="screen-header-button maximize" />
                            <div className="screen-header-button minimize" />
                        </div>
                        <div className="screen-header-right">
                            <div className="screen-header-ellipsis" />
                            <div className="screen-header-ellipsis" />
                            <div className="screen-header-ellipsis" />
                        </div>
                        </div> */}
                        <div className="screen-body">
                        <div className="screen-body-item left">
                            <div className="app-title">
                            <span>WELCOME</span>
                            <span>BACK</span>
                            </div>
                        </div>
                        <div className="screen-body-item">
                            <div className="app-form">
                            <div className="app-form-group">
                                <input className="app-form-control"
                                       value={this.state.email}
                                       onChange={e => this.setState({ email: e.target.value })}
                                       placeholder="Email"
                                />
                            </div>
                            <div className="app-form-group">
                                <input className="app-form-control"
                                       value={this.state.password}
                                       placeholder="Password"
                                       onChange={e => this.setState({ password: e.target.value })}
                                />
                            </div>
                            {/* <div className="app-form-group">
                                <input className="app-form-control" placeholder="CONTACT NO" />
                            </div>
                            <div className="app-form-group message">
                                <input className="app-form-control" placeholder="MESSAGE" />
                            </div> */}
                            <div className="app-form-group buttons">
                                <Link to={'/register'}><button className="app-form-button">REGISTER</button></Link>
                                <button onClick={this.logIn} className="app-form-button">LOG IN</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Login;