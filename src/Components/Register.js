import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

    state = {
        email: '',
        password: '',
    }

    register = () => {
        axios.post(`https://reqres.in/api/register`,
         {
             email: this.state.email,
             password: this.state.password
         }
     )
     .then(res => {
        this.props.history.push('/login');
         console.log(res)
     })
    }

    render() {
        return (
            <div>
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
                            <span>REGISTER</span>
                            <span>AN ACCOUNT</span>
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
                            <div className="app-form-group">
                                <input className="app-form-control" placeholder="USERNAME" />
                            </div>
                            {/* <div className="app-form-group message">
                                <input className="app-form-control" placeholder="MESSAGE" />
                            </div> */}
                            <div className="app-form-group buttons">
                                {/* <button className="app-form-button">REGISTER</button> */}
                                <button onClick={this.register} className="app-form-button">REGISTER</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;