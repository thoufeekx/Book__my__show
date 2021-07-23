
import React, {useContext, useState} from 'react';
import {MovieContext} from "../../context/movie.context"
//import payment modal
import PaymentModal from '../PaymentModal/Payment.component';



const Movieinfo = () => {


    const [isOpen, setIsOpen]= useState(false);
    const [price, setprice]= useState(0);

    const {movie} =useContext(MovieContext);
    const genres=movie.genres?.map(({name}) => name).join(", ");

const rentMovies = () =>{

    setIsOpen(true);
    setprice(149);
};



const buyMovies = () =>{

    setIsOpen(true);
    setprice(599);
};


    return (
        <>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
        <div className="flex flex-col gap-3 lg:gap-8">


            <div className="flex items-center gap-3 md:px-4">
                <div className="w-40 h-8">
                    <img 
                    src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                    alt="premier"
                    className="w-full h-full"
                    />
                </div>
                <span className="bg-reed-700 p-1 text-xs text-white rounded-md">Streaming Now</span>
            </div>


            <h1 className=" hidden lg:block text-white lg:text-5xl ">{movie.original_title}</h1>

           <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">

                 
            <div className="text-white font-light flex flex-col gap-3 md:px-4">
                    <h4 className="">4K &bull; {movie.original_language} </h4>
                    <h4 className="">{(movie.runtime/60).toFixed(2)} hrs &bull; {genres} &bull; 13+</h4>
            </div>
            <div className="flex items-center gap-3 md:w-screen lg:w-full md:px-4">

                    <button onClick={rentMovies} 
                    className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Rent ₹149
                    </button>

                    <button 
                    onClick={buyMovies}
                    className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Buy  ₹650
                    </button>


            </div>


           </div>

        </div>
        
        </>
    )
}

export default Movieinfo;
