import React, {useState, useEffect} from "react";


//import card entertainment
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
//import premier
//import Premier from "../components/premier/premier.component";
//import { Premier } from "../components/premier/premier.component";
//temp

//import TempPosters from "../config/TempPosters.config";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import axios from "axios";






const HomePage = () => {


  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setTopRatedMovies(getPopularMovies.data.results)
    };
    requestPopularMovies();
    
  }, []);


  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/top_rated");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };
    requestTopRatedMovies();
    
  }, []);


  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/upcoming");
      setPopularMovies(getTopRatedMovies.data.results);
    };
    requestUpcomingMovies();
    
  }, []);


  
   //console.log({popularMovies})


    return <>
     <div className="flex flex-col gap-10">

     <div className="container mx-auto px-4">

<h1 className="text-2xl font-bold text-grey-800 my-3">The best of Entertainment</h1>
<EntertainmentCardSlider/>


</div>

<div className="bg-reed-800 py-12 ">

<div className="container mx-auto px-4 flex flex-col ">
<div className="hidden md:flex">
<img  src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
alt="premiere logo"/>
</div>


<PosterSlider images={popularMovies} 
              title="Premieres" 
              subtitle="Brand new release every Friday"
              isDark/>
</div>


</div>


     </div>



     <div className="container mx-auto px-4 my-8">
       <PosterSlider
       images={topRatedMovies} 
       title="Online Streaming events" 
       isDark={false}
       />
     </div>


     <div className="container mx-auto px-4 my-8">
       <PosterSlider
       images={upcomingMovies} 
       title="Outdoor Events" 
       isDark={false}
       />
     </div>
    





    </>




};

export default HomePage;