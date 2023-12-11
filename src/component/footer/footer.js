import React,{Component} from 'react'
import './footer.scss'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

class Footer extends Component{
    render(){
        return(
            <section className='footer-section'>
                <div className='footer-container'>
                    <div className='footer-row'>
                        <p className='footer-para1'>
                        <AiOutlineCopyrightCircle/>  Copyright <span>Siimple</span>. All Rights Reserved
                        </p>
                        <p className='footer-para2'>
                        Designed by <span>BootstrapMade</span>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Footer 