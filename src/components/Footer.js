import React, { useEffect } from 'react'
import './footer.css'
import {FiChevronRight} from 'react-icons/fi'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

 
const Footer = () => {
   useEffect(()=>{
      Aos.init({duration: 3000})
   }, [])
  return (
    <section id='footer'className='footer'>
     <div className="secContent container">
       <div className="footerCard flex">
         <div className="footerIntro flex">
         <div className="logoDiv">
            <a href="#" className=""><h1>  Travel and Tour</h1></a>
          </div>
          <div data-aos="fade-up" data-aos-duration="5000"  className="footerParagraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore eos fuga hic cum voluptatem minima, tempore non odio provident nobis ipsam at, doloremque sed cupiditate ipsum in, atque soluta?
          </div>
          <div data-aos="fade-up" data-aos-duration="4000"  className="footerSocials flex">       
          <AiOutlineTwitter className="icon"/>
          <AiFillYoutube className="icon"/>
          <AiFillInstagram className="icon"/>
          </div>
         </div>
         <div className="footerLinks grid">
          {/* Group One */}
           <div data-aos="fade-up" data-aos-duration="4000"  className="linkGroup">
               <span className="groupTitle">
                OUR AGENCY
               </span>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agency
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tourism
               </li>
           </div>

          {/* Group Two */}
           <div data-aos="fade-up" data-aos-duration="4000"  className="linkGroup">
               <span className="groupTitle">
               PARTNERS
               </span>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Booking
               </li>
           </div>

          {/* Group three */}
         
         </div>

         <div className="footerDiv flex">
           <small>BEST TRAVEL WEBSITE FOR EVERYONE </small>
         </div>
       </div>

     </div>

    </section>
  )
}

export default Footer