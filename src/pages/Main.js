/*  import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiClipboardList} from 'react-icons/hi'
import img from '../../Assets/buddhas of bamyan.PNG'
import Aos from 'aos'
import 'aos/dist/aos.css'
import buddhasOfBamyan from "buddhas of bamyan.PNG";




const Data = [
  {
  id:1,
  imgSrc: img,
  destTitle: 'Buddhas of Bamiyan',
  location: 'Afghanistan',
  fees: '$700',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos similique assumenda vitae temporibus eos minus corporis sequi hic repellat, ' 

  },
]

const Main = () => { 
  useEffect(()=>{
    Aos.init({duration: 4000})
 }, [])
  return (
    <section id='main' className='main section container'>
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return (
              
              <div key={id} data-aos="fade-up" className="singleDestination">
      
                 <div className="imageDiv">
                 <img src={imgSrc} alt="" />
                 </div>
      
                <div className="cardInfo">
                 <h4 className="destTitle">{destTitle}</h4>
                 <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                 </span>
      
                 <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+100 </small> </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                 </div>
      
                 <div className="desc">
                  <p>{description}</p>
                 </div>
      
                 <button className='btn flex'>DETAILS <HiClipboardList className="icon"/> </button>
                </div>
              </div>
      
            )
          }) 
        }
      </div>
     
    </section>
  )
}

export default Main  */