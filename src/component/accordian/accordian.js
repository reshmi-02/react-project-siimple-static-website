import React, { Component } from 'react'
import './accordian.scss'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'


class Accordian extends Component {

   render() {
      const content = [
         {
            head: "Non consectetur a erat nam at lectus urna duis?",
            para: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
            icon1: <AiOutlineArrowDown className="icon1" />,
            icon2: <FaTimes className='icon2' />
         },
         {
            head: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
            para: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
            icon1: <AiOutlineArrowDown className="icon1" />,
            icon2: <FaTimes className='icon2' />
         },
         {
            head: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
            para: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
            icon1: <AiOutlineArrowDown className="icon1" />,
            icon2: <FaTimes className='icon2' />
         },
         {
            head: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
            para: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
            icon1: <AiOutlineArrowDown className="icon1" />,
            icon2: <FaTimes className='icon2' />
         },
         {
            head: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
            para: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
            icon1: <AiOutlineArrowDown className="icon1" />,
            icon2: <FaTimes className='icon2' />
         },
         {
            head:"Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?",
            para:"Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.",
            icon1: <AiOutlineArrowDown className="icon1" />,
            icon2: <FaTimes className='icon2' />
         }
      ]
      return (
         <section className='accordian-section'>
            <p className='accordian-heading'>
               Frequenty Asked Questions
            </p>
            <div className='accordian-lines'>
               <div className='accordian-lines-color'>

               </div>
            </div>
            <div className='accordian-container'>
               <div className='accordian-row'>
                  {
                     content.map((value, i) => {
                        return (
                           <div className='accordian-content' key={i}>
                              <div className='accordian-head'>
                                 <p className='accordian-para1'>{value.head}</p>
                                 {value.icon1} {value.icon2}
                              </div>
                              <p className='accordian-para2'>{value.para}</p>
                             
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </section>
      )
   }
}

export default Accordian