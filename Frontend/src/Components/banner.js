import React from 'react'
import bannerImage from '../Assets/sample-image-1.jpg'
import '../Styles/banner.css'
import Reveal from './Reveal'
import images from './images'


export default function banner() {
    return (
        <div className='banner'> 
            
            {/* <div className="img">

                <img src= { bannerImage } alt="" />

            </div> */}

            <div className="img">

            <Reveal slides={ images } /> 

            </div>

            <div className="info">

                <h1> Your Journey Starts here ! </h1>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores illum in similique sed quia consequatur dolorum magnam, veritatis exercitationem? </p>

                <button> Begin Your Journey </button>

            </div>

        </div>
    )
}
