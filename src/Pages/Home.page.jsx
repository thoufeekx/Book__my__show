import React from "react";

//import card entertainment
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
//import premier
//import Premier from "../components/premier/premier.component";
import { Premier } from "../components/premier/premier.component";
//temp

import TempPosters from "../config/TempPosters.config";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";






const HomePage = () => {

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
<PosterSlider images={TempPosters} 
              title="Premieres" 
              subtitle="Brand new release every Friday"
              isDark/>
</div>


</div>


     </div>



     <div className="container mx-auto px-4 my-8">
       <PosterSlider
       images={TempPosters} 
       title="Online Streaming events" 
       isDark={false}
       />
     </div>


     <div className="container mx-auto px-4 my-8">
       <PosterSlider
       images={TempPosters} 
       title="Outdoor Events" 
       isDark={false}
       />
     </div>
    





    </>




};

export default HomePage;