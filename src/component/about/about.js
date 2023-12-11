import React from 'react'
import image from '../../images/img-1.jpg'
import './about.scss'
import { FaCheckDouble } from 'react-icons/fa'

const About = () => {
    const content = [
        {
            icon: <FaCheckDouble className='about-icon' />,
            para: "Ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            icon: <FaCheckDouble className='about-icon' />,
            para: "Duis aute irure dolor in reprehenderit in voluptate velit."
        },
        {
            icon: <FaCheckDouble className='about-icon' />,
            para: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur."
        }
    ]
    return (
        <section className='about-section'>
            <div className='about-container'>
                <div className='about-row'>
                    <div className='about-col'>
                        <img src={image} />
                    </div>
                    <div className='about-col'>
                        <p className='about-para1'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</p>
                        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</i>
                        <div className='about-para2'>
                            {
                                content.map((value, i) => {
                                    return (
                                        <p key={i}>{value.icon} {value.para}</p>
                                    )
                                })
                            }
                        </div>
                        <p className='about-para3'>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
