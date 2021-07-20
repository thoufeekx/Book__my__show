import React from 'react'
import {FaCcVisa, FaApplePay} from "react-icons/fa";
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/cast.component';

import TempPosters from "../config/TempPosters.config";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";




 const Movie = () => {


  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
      <>
    
      <MovieHero/>

      <div 
      className="my-12 container mx-auto px-4 lg:ml-20 lg:w-3/5" 
      >
        <div className="flex flex-col items-start gap-3">

        <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
        <p className="">After a tragic accident, Nobel laureate Marie Curie keeps working on radioactive elements which results in revolutionary discoveries that have dramatic consequences for the modern world.</p>

        </div>
           <div className="my-8 ">
           <hr />
           </div>

        <div>
          <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable Offers</h2>
       

           </div>
           
      <div className="flex flex-col gap-3 lg:flex-row">


           <div className="flex item-start gap-3 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                  <div className="w-8 h-8">
                  <FaCcVisa
                  className="w-full h-full"
                  />
                  </div>
             
              <div className="flex flex-col items-start">
                <h3 className=" text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                <p className=" text-gray-600">
                  Get 50% off up to INR 150 on all Rupay cards* on BookMyShow Stream.

                </p>
              </div>
            </div>
           
           <div className="flex item-start gap-3 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                  <div className="w-8 h-8">
                  <FaApplePay
                  className="w-full h-full"
                  />
                  </div>
             
              <div className="flex flex-col items-start">
                <h3 className=" text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className=" text-gray-600">
                  Get 75% off on 3 movies you buy/rent on stream. Buy Filmy Pass Rs. @99.

                </p>
              </div>
            </div>

        
        </div>


     <div className="my-8">

     <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and crew</h2>
     <div className="flex flex-wrap gap-3">
        
        <Cast
        image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/rosamund-pike-1931-24-03-2017-17-29-41.jpg"
        castName="Rosmund pike"
        role="Marie Curie"
        />

        <Cast
        image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sam-riley-29714-24-03-2017-17-32-59.jpg"
        castName="Sam Riley"
        role="Peirre Curie"
        />

        <Cast
        image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/simon-russell-beale-27023-24-03-2017-13-49-17.jpg"
        castName="Simon Russell Beale"
        role="Beale"
        />
      </div>

      <div className="my-8 ">
           <hr />
           </div>

     </div>

       <div className="my-8">
       <PosterSlider
       config={settings}
       images={TempPosters} 
       title="You might also like" 
       isDark={false}/>   
      </div> 

      
      <div className="my-8 ">
           <hr />
           </div>

      <div className="my-8">
       <PosterSlider
       config={settings}
       images={TempPosters} 
       title="BMS Exclusive" 
       isDark={false}/>   
      </div> 

      
      <div className="my-8 ">
           <hr />
           </div>
           
      </div>
      </>
    )
}

export default Movie;