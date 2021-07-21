import React from 'react'

//poster import
import Poster from '../components/Poster/poster.component';

import PlaysFilter from '../components/PlaysFilter/Playsfilter.component';

const Plays = () => {
    return (
       <>
       
        <div className="container mx-auto px-4">
              
                

            
            
            
        <div className="w-full lg:flex lg:flex-row-reverse">

            <div className="lg:w-3/4">
                <h2 className="font-bold text-2xl px-4 mb-4">
                Plays In Bangluru
                </h2>

                <div className="flex flex-wrap">

                <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
<Poster
src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311987-grtmzzwwnt-portrait.jpg"
title="Crazy thieves in palavakkom"
subtitle="Tamil -> ₹400"
/>
</div>


<div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
<Poster
src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311987-grtmzzwwnt-portrait.jpg"
title="Crazy thieves in palavakkom"
subtitle="Tamil -> ₹400"
/>
</div>


<div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
<Poster
src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311987-grtmzzwwnt-portrait.jpg"
title="Crazy thieves in palavakkom"
subtitle="Tamil -> ₹400"
/>
</div>


<div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
<Poster
src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311987-grtmzzwwnt-portrait.jpg"
title="Crazy thieves in palavakkom"
subtitle="Tamil -> ₹400"
/>
</div>


            </div>

                
            </div>
               
 


            <div className="lg:w-3/12">
  
                <h2 className="font-bold text-2xl px-4 mb-4">
                Filters
                </h2>

                    <div>
                      <PlaysFilter 
                      title="Date"
                      tags={["Today", "Tomorrow", "This week", "This month"]}
                      />    

                    </div>

                    <div>
                      <PlaysFilter 
                      title="Language"
                      tags={["English", "Russian", "Spanish", "Arabic"]}
                      />    

                    </div>

            </div>

    </div>
               
            
</div>
       
       
       </>
    )
}

export default Plays;
