import React from 'react'
import { useState } from 'react'
import { data } from './images'
import images from './images'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import '../Styles/reveal.css'

const Reveal = ( { slides } ) =>  {

   const [current, setCurrent] = useState(0)
   const length = slides.length

    const nextSlide  = () => {
        setCurrent( current === length - 1 ? 0 : current + 1)
    }

    console.log(current)

    const prevSlide = () => {
        setCurrent( current === 0 ? length - 1 : current - 1 )
    }

   if ( !Array.isArray(slides) || slides.length <= 0 ) {
       return null
   }

    return (
        <section className='slider'>

            {/* <FaArrowAltCircleLeft className='left-arrow' onClick = { prevSlide } />  */}
            {/* <FaArrowAltCircleRight className='right-arrow' onClick  = { nextSlide } />  */}
            <span class="material-icons" id='icon1' onClick = { prevSlide } >arrow_back_ios</span>
            <span class="material-icons" id='icon2' onClick = { nextSlide } >arrow_forward_ios</span>
            

            {images.map( (slide, index) => {
                return (
                    <div className = { index === current ?  'slide active' : 'slide' } key = { index }>
                        { index === current && (<img src= { slide.image } alt="" />) }
                        
                    </div>
                ) 
            } )}

        </section>
    )
}

export default Reveal