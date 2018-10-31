import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    state = {
        user: []
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        axios.get(`https://reqres.in/api/users`)
        .then(res => {
            this.setState({ user: res.data.data });

        })
    }
    render() {
        console.log(this.state.user)
        return (
            <div>

                {
                    this.state.user.map((obj, i) => {
                        return(
                            <div className="wrapper container mb-4 col-md-4"key={i}>
                                <div className="outer">
                                <div className="content animated fadeInLeft">
                                    <span className="bg animated fadeInDown">{obj.id}</span>
                                    <h1>{obj.first_name}</h1>
                                    <h3>{obj.last_name}</h3>
                                    <p>22 Crankewood Avenue MD.</p>
                                    <p>+254 00 958768 0</p>
                                    <div className="button">
                                    <a href="/">Delete</a><a className="cart-btn" href="/"><i className="cart-icon ion-bag" />Edit</a>
                                    </div>
                                </div>
                                <img src={obj.avatar} width="250px" alt="Try" className="animated fadeInRight" />
                                </div>

                                {/* <p className="footer">Based on the Silk UI Kit - DesignModo Market</p> */}
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

export default Home;