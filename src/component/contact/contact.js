import React, { Component } from 'react'
import './contact.scss';
import {CiLocationOn} from 'react-icons/ci'
import { AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BiPhoneCall, BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import {HiOutlineLocationMarker} from 'react-icons/hi';


class Contact extends Component {
    render() {
        const personalDetail=[
            {
                icon:<HiOutlineLocationMarker className='contact-details-icon' style={{fontSize:"2em"}}/>,
                para:"A108 Adam Street New York, NY 535022"
            },
            {
                icon:<AiOutlineMail className='contact-details-icon'/>,
                para:"info@example.com"
            },
            {
                icon: <BiPhoneCall className='contact-details-icon'/>,
                para:"+1 5589 55488 55s"
            }
        ]

        const contactIcon=[
            {
                icons:<AiOutlineTwitter className='contact-icons-icon' />
            },
            {
                icons:<BiLogoFacebook className='contact-icons-icon'/>
            },
            {
                icons:<AiOutlineInstagram className='contact-icons-icon'/>
            },
            {
                icons:<BiLogoLinkedin className='contact-icons-icon'/>
            }
        ]
        return (
            <section className='contact-section'>
                <p className='contact-head'>
                    Contact Us
                </p>
                <div className='contact-line'>
                    <div className='contact-line-color'>

                    </div>
                </div>
                <div className='contact-container'>
                    <div className='contact-row'>
                        <div className='contact-col1'>
                            {
                                personalDetail.map((value,i)=>{
                                    return(
                                        <div className='contact-details' key={i}>
                                            {value.icon}
                                            <p>{value.para}</p>
                                        </div>
                                    )
                                })
                            }
                            <div className='contact-icons'>
                                {
                                    contactIcon.map((value,i)=>{
                                        return(
                                        <div className='contact-icon-div' key={i}>
                                           {value.icons}
                                        </div> 
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='contact-col2'>
                            <div className='contact-ipt'>
                                <input type="text" placeholder='your name'></input>
                            </div>
                            <div className='contact-ipt'>
                                <input type="email" placeholder='your email'></input>
                            </div>
                            <div className='contact-ipt'>
                                <input type="text" placeholder='your subject'></input>
                            </div>
                            <div className='contact-textarea'>
                                <textarea rows="5" placeholder='message'></textarea>
                            </div>
                            <div className='contact-btn'>
                                <a href="#">Send Message</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }


}

export default Contact