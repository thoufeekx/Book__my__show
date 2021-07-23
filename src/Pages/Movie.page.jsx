
import {FaCcVisa, FaApplePay} from "react-icons/fa";
import React, {useContext, useState, useEffect} from 'react';

import axios from "axios";
import { useParams } from "react-router";

import Slider from "react-slick";
import MovieHero from '../components/MovieHero/MovieHero.component';
import Cast from '../components/Cast/cast.component';

import TempPosters from "../config/TempPosters.config";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";

import { MovieContext } from "../context/movie.context";




 const Movie = () => {

   const {id} = useParams();

   const {movie} = useContext(MovieContext);

   const [cast, setCast] = useState([]);
   const [similarMovies, setSimilarMovies] = useState([]);
   const [recommended, setRecommendedMovies] = useState([]);

   useEffect(() => {
     const requestCast = async() => {
       const getCast = await axios.get(`/movie/${id}/credits`);
       console.log(getCast.data.cast);
       setCast(getCast.data.cast);
     };
     requestCast();
   },[id]);


   useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
    
  }, [id]);


  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
    
  }, [id]);

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

  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
        <p className="">{movie.overview}</p>

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
     
     <Slider {...settingsCast}>
            {cast.map((castdata) => (
              <Cast
                image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                castName={castdata.original_name}
                role={castdata.character}
              />
            ))}
          </Slider>
   
       
      

      <div className="my-8 ">
           <hr />
           </div>

     </div>

       <div className="my-8">
       <PosterSlider
       config={settings}
       images={similarMovies} 
       title="You might also like" 
       isDark={false}/>   
      </div> 

      
      <div className="my-8 ">
           <hr />
           </div>

      <div className="my-8">
       <PosterSlider
       config={settings}
       images={recommended} 
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