import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <>
        <div className="background">
            <div className="container">
            <div className="screen">
                <div className="screen-header">
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
                </div>
                <div className="screen-body">
                <div className="screen-body-item left">
                    <div className="app-title">
                    <span>CONTACT</span>
                    <span>US</span>
                    </div>
                </div>
                <div className="screen-body-item">
                    <div className="app-form">
                    <div className="app-form-group">
                        <input className="app-form-control" placeholder="Username" defaultValue="Admin" />
                    </div>
                    <div className="app-form-group">
                        <input className="app-form-control" placeholder="Password" />
                    </div>
                    {/* <div className="app-form-group">
                        <input className="app-form-control" placeholder="CONTACT NO" />
                    </div>
                    <div className="app-form-group message">
                        <input className="app-form-control" placeholder="MESSAGE" />
                    </div> */}
                    <div className="app-form-group buttons">
                        <button className="app-form-button">CANCEL</button>
                        <button className="app-form-button">SEND</button>
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