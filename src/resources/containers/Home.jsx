import React, { Component } from 'react';

import qrVcard from '../../resources/img/qr/qr-code.png';
import photo from '../../resources/img/vhcastro-1.jpg'

class Home extends Component {

    state = {
        menu: [
            
        ]
    }

    render() {
        return(
            <section id="home" className="h-100">
                <div className="d-flex flex-column justify-content-between h-100">
                    <div id="top" className="d-flex justify-content-between">
                        <div id="menu">
                            <h4><span className="text-white-50">Victor</span> Castro</h4>
                            {this.state.menu.length > 0 && 
                                <ul className="pt-5 my-5 pb-2 list-unstyled">
                                    {this.state.menu.map((m, i) => {
                                        return (<li key={i} className="my-3"> {m.name} </li>)
                                    })}
                                    
                                </ul>
                            }
                        </div>
                        <div id="me">
                            <div className="slider" style={{backgroundImage: `url(${photo})`}}>
                            </div>
                        </div>
                        <div id="qr">
                            <img src={qrVcard} alt="Contact me"/>
                            <p className="mt-3">
                                <span className="text-white-50">01101101</span> <span className="text-success">01100101</span>
                            </p>
                        </div>
                    </div>
                    <div id="footer" className="d-flex justify-content-between align-items-end">
                        <div className="contact text-white-50">
                            <p>victor@castrocontreras.com</p>
                            <p>+51 961 509 467</p>
                        </div>
                        <div className="quote">
                            <h1 className="font-weight-bold">Talk is cheap, <span className="text-success">show me the code.</span></h1>
                        </div>
                        <div id="followme" className="d-flex flex-column align-items-center">
                            <small className="">Follow me</small>
                            <span className="line mb-3 mt-5"/>
                            <i className="fab fa-github-alt my-2"></i>
                            <i className="fab fa-linkedin-in my-3"></i>
                            <i className="fab fa-whatsapp mt-2"></i>
                        </div>
                    </div>
                </div>

               
            </section>
        )
    }
}

export default Home;