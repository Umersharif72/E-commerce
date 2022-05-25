
import React, { Component } from 'react';
import '../page2/parts.css'
import Footer from "../Footer/footer";
import Navbars from '../Header/navbar';
class Parts extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbars />
                <div className='row'>
                    <div id='row-1' className='col-3'>
                        <h1 id='note' style={{color : "#3cbeb2"}}>Guarantee</h1>
                        <ul>
                            <li><p>Our parts are 100% genuine</p></li>
                            <li><p>Our parts are 100% New</p></li>
                            <li><p>No guarentee of imported parts</p></li>
                            <li><p>Parts could be replaced within 5 days</p></li>
                            <li><p>Damaged parts are not refunded or replaced</p></li>
                            <li><p>Only checked parts could be claimed under guarentee </p></li>
                        </ul>
                        <h2 id='note' style={{color : "#3cbeb2"}} >Important Note</h2>
                        <p id='note' >There will be no guarantee of imported parts. There parts are not refundable or replceable. All local parts could be replaced or refunded within 5 days, after that no parts will be replaced or refunded.</p>
                        <h3 id='h3' style={{color : "#3cbeb2"}}>For further details, Contact us and for a better experience, visit our shop</h3>
                    </div>
                    <div id='row-2' className='col-8'>
                        <div className='row'>
                            <div className='col-4'>
                                <div className="card" style={{width: "18rem"}}>
                                <img className='img'  src={require('../images/1 (1).png')} alt="icon-1" />
                                        <div className="card-body">
                                            <p className="card-text">Brand new as well as used tyre but in a very good condition are availabe.</p>
                                        </div>
                                </div>
                                
                                <div className="card" style={{width: "18rem"}}>
                                <img className='img'  src={require('../images/1 (2).png')} alt="icon-2" />
                                        <div className="card-body">
                                            <p className="card-text">Brand new as well as used braking shields but in a very good condition are availabe.</p>
                                        </div>
                                </div>
                                

                            </div>
                            <div className='col-4'>
                            <div className="card" style={{width: "18rem"}}>
                                <img className='img' src={require('../images/1 (3).png')} alt="icon-2" />
                                        <div className="card-body">
                                            <p className="card-text">Brand new as well as used gear box but in a very good condition are availabe.</p>
                                        </div>
                                </div>
                                <div className="card" style={{width: "18rem"}}>
                                <img className='img' src={require('../images/1 (4).png')} alt="icon-2" />
                                        <div className="card-body">
                                            <p className="card-text">Brand new as well as used compressor but in a very good condition are availabe.</p>
                                        </div>
                                </div>
                            </div>
                            <div className='col-4'>
                            <div className="card" style={{width: "18rem"}}>
                                <img className='img' src={require('../images/1 (5).png')} alt="icon-2" />
                                        <div className="card-body">
                                            <p className="card-text">Brand new as well as used clutch plates but in a very good condition are availabe.</p>
                                        </div>
                                </div>
                                <div className="card" style={{width: "18rem"}}>
                                <img className='img' src={require('../images/1 (6).png')} alt="icon-2" />
                                        <div className="card-body">
                                            <p className="card-text">Brand new as well as used throttle body but in a very good condition are availabe.</p>
                                        </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Parts;