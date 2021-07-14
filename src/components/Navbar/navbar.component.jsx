import React from "react";
import {BiChevronRight, BiSearch, BiChevronDown, BiMenu} from "react-icons/bi"


const NavSm = () => {
  return(  <>
   <div className="text-white flex item-center justify-between"> 
        <div className="text-white">
            <h4 className="text-xl font-bold">It all starts here!</h4>
            <span className="text-gray-400 text-xs flex items-center">
                Bengluru<BiChevronRight/>
            </span>
        </div>
         <div  className="w-8 h-8">
             <BiSearch className="w-full h-full"/>
         </div>
    </div>
    </>);
};
const NavMd = () => {

    return(
         <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
                <BiSearch className="w-6 h-6"/>
                <input type="search" 
                       className="w-full bg-transparent border-none focus:outline-none" 
                       placeholder="  Search for movies, events, place, sports and activities"/>
                      
         </div>
    )
};
const NavLg =() => {

    return( <>

        <div className="container mx-auto px-4 flex items-center justify-between ">

             <div className="flex gap-2 items-center w-1/2 ">
                 <div className="w-12 h-12">
                     <img  src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" 
                            alt="logo"
                            className="w-full h-full"
                            />
                 </div>

                 <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
                <BiSearch className="w-6 h-6"/>
                <input type="search" 
                       className="w-full bg-transparent border-none focus:outline-none" 
                       placeholder="  Search for movies, events, place, sports and activities"/>
                      
         </div>
             </div>
             <div className="flex items-center gap-2 px-2">
             <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">
                Bengluru<BiChevronDown/>
            </span>
            <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign In</button>
           <div className="text-white w-8 h-8"> <BiMenu className="w-full h-full"/></div>

                

             </div>
        </div>
   
   </> );
};


const Navbar = () => {

return <>

<nav className="bg-reed-700 p-4">
        <div className="md:hidden">
            {/**Mobile Screen */} 
            <NavSm/>

        </div>
        <div className="hidden md:flex lg:hidden">
            {/*medium screen*/ }
            <NavMd/>
            </div>
            <div className="hidden lg:flex">
            {/*Large Screen*/}
            <NavLg/>
            </div>

        
</nav>




</>


};

export default Navbar;