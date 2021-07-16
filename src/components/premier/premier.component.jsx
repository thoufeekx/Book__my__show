import React from 'react';
import Slider from 'react-slick';

//import poster
import Poster from '../Poster/poster.component';

//slider



 const Premier= () => {


    
    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [{
            breakpoints: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinity: true,
            },
        },

            {
                breakpoints: 768,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                   
                    InitialSlide: 1,
                },
            },


            {
                breakpoints: 480,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    
                    
                },
            }


    

            
            
        ],
    };

const PremierImages= [
    {src: "https://in.bmscdn.com/discovery-catalog/events/et00303783-lmvxvxzvrd-portrait.jpg",
    alt:"movie",
    title:"The Tunnel",
    subtitle:"Survival genre",
    },

    {src: "https://in.bmscdn.com/discovery-catalog/events/et00303783-lmvxvxzvrd-portrait.jpg",
    alt:"movie",
    title:"The Tunnel",
    subtitle:"Survival genre",
    },

    {src: "https://in.bmscdn.com/discovery-catalog/events/et00303783-lmvxvxzvrd-portrait.jpg",
    alt:"movie",
    title:"The Tunnel",
    subtitle:"Survival genre",
    },

    {src: "https://in.bmscdn.com/discovery-catalog/events/et00303783-lmvxvxzvrd-portrait.jpg",
    alt:"movie",
    title:"The Tunnel",
    subtitle:"Survival genre",
    },

    {src: "https://in.bmscdn.com/discovery-catalog/events/et00303783-lmvxvxzvrd-portrait.jpg",
    alt:"movie",
    title:"The Tunnel",
    subtitle:"Survival genre",
    },

    {src: "https://in.bmscdn.com/discovery-catalog/events/et00303783-lmvxvxzvrd-portrait.jpg",
    alt:"movie",
    title:"The Tunnel",
    subtitle:"Survival genre",
    },
]

    return (
        <>
        <Slider {...settings}>
            {PremierImages.map((image) => (
                <Poster {...image}/>
            ) )}
        </Slider>
        

            
        </>
    )
}

export default Premier;