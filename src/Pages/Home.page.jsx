import React from "react";

//import card entertainment
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
//import premier
import Premier from "../components/premier/premier.component";






const HomePage = () => {

    return <>
      <div className="container mx-auto px-4">

            <h1 className="text-2xl font-bold text-grey-800 my-3">The best of Entertainment</h1>
            <EntertainmentCardSlider/>
            <Premier/>

    </div>
    </>
};

export default HomePage;