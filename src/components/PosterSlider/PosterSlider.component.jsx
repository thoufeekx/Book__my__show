import React from 'react'

import PosterCarouselsettings from '../../config/PosterCarousel.config';
//import PremierImages from '../../config/TempPosters.config';

//PremierImages

//config


//import poster
import Poster from '../Poster/poster.component';
import Slider from 'react-slick';


export const PosterSlider = (props) => {
    
    const sliderConfig = props.config ? props.config : PosterCarouselsettings;
    return (
    <>

    <div className="flex flex-col items-start my-2">
        <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
        <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
    </div>
    <Slider {...sliderConfig}>
        {props.images.map((image) => (
            <Poster {...image} isDark={props.isDark}/>
        ) )}
    </Slider>
    

        
    </>
       
    )
    
  
}

export default PosterSlider;