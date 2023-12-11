import React from 'react'
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg'
import img4 from '../../images/img-4.jpg'
import {FaReadme} from 'react-icons/fa'
import { BiSolidCalendarEdit } from "react-icons/bi";
import { FaMountainSun } from "react-icons/fa6";
import './card.scss'

const Card=()=>{
    let detail=[
        {
            image:img2,
            logo:<FaReadme className='card-icons'/>,
            title:"Our Mission",
            para:"Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            image:img3,
            logo:<BiSolidCalendarEdit className='card-icons'/>,
            title:"Our Plan",
            para:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },
        {
            image:img4,
            logo:<FaMountainSun className='card-icons'/>,
            title:"Our Vision",
            para:"Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
        }

    ]
    return(
        <section className='card-section'>
            <div className='card-container'>
                <div className='card-row'>
                    {
                        detail.map((value,i)=>{
                            return(
                                <div className='card-col' key={i}>
                                    <div className='card-card'>
                                        <div className='card-image'>
                                            <img src={value.image}/>
                                        </div>
                                        <div className='card-content'>
                                            <div className='card-icon'>
                                                {value.logo}
                                            </div>
                                            <h3>{value.title}</h3>
                                            <p> {value.para}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Card