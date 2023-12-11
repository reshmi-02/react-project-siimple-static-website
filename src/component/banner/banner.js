import React from 'react'
import './banner.scss'
import { FaBars, FaTimes } from 'react-icons/fa'
import {AiFillCar} from 'react-icons/ai'

const Banner = () => {

    return (
        <section className='banner-section'>
            <div className='banner-container'>
                <div className='banner-head'>
                    <p>Siimple</p>
                    <div className='banner-open-bar'>
                        <FaBars className='banner-bar' id='ban-bar' />
                        <div className='banner-navbar'>
                            <Navbar />
                        </div>
                    </div>

                </div>
                <div className='banner-row'>
                    <div className='banner-col'>
                        <h1>Welcome to Siimple</h1>
                        <p>Please, fill out the for below to be notified for the latest updates!</p>
                        <div className='banner-detail'>
                            <div className='banner-name'>
                                <input type="text" placeholder='your name'></input>
                            </div>
                            <div className='banner-email'>
                                <input type="email" placeholder='your Email'></input>
                            </div>

                        </div>
                        <div className='banner-notify'>
                            <a href="#">Notify me!</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='closing-icon'>
                <FaTimes className='navbar-closing-icon' />
                <div className='list'>

                    <a href='banner.js' className='navbar-home'>Home</a><br></br>
                    <a href='../about/about.js'>About us</a><br></br>
                    <a href='../card/card.js'>Why us</a><br></br>
                    <ol className='navbar-ol1'>
                        <li className='navbar-ol1-lists'>
                            Drop Down<AiFillCar />
                            <ol className='navbar-ol2'>
                                <li className='navbar-ol2-list'>Drop Down1</li>
                                <li className='navbar-ol2-lists'>
                                    Drop Down2<AiFillCar/>
                                    <ol className='navbar-ol3'>
                                        <li className='navbar-ol3-list'>Deep Drop Down1</li>
                                        <li className='navbar-ol3-list'>Deep Drop Down2</li>
                                        <li className='navbar-ol3-list'>Deep Drop Down3</li>
                                        <li className='navbar-ol3-list'>Deep Drop Down4</li>
                                        <li className='navbar-ol3-list'>Deep Drop Down5</li>
                                    </ol>
                                </li>
                                <li className='navbar-ol2-list'>Drop Down3</li>
                                <li className='navbar-ol2-list'>Drop Down4</li>
                                <li className='navbar-ol2-list'>Drop Down5</li>
                            </ol>
                        </li>
                    </ol>
                    <a href='../contact/contact.js'>Contact us</a>

                </div>
            </div>

        </div>
    )
}
export default Banner